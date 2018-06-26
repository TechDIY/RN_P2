import React from 'react';
import { View, Animated } from 'react-native';
import Transition from './Transition';
import DetailScreen from './DetailScreen';

import PropTypes from 'prop-types';

import { Card , Text , Button , Icon } from 'react-native-elements';

class CardItem extends React.Component {
  state = {
    opacity: 1,
  };

  static contextTypes = {
    onImageRef: PropTypes.func
  };

  setOpacity = opacity => {
    this.setState({ opacity });
  };

  render() {
    const { style, item } = this.props;
    const { opacity } = this.state;

    // Level ColorBar
    let color = () => {
      if (item.Level == 1){
        return 'red' 
      }else if (item.Level == 2){
        return 'green' 
      }else{
        return 'black' 
      }
    }

    return (
      <Animated.View style={{flex: 1}}>
        <Card
          title='HELLO WORLD'
          image={require('./img/pic.jpg')}
          style={{flex: 1}}>

          <View style={
            {
              borderRadius:15,
              marginTop:10,
              width: 30,
              height:10,
              backgroundColor:color(),
            }
          }/>

          <Text style={{marginBottom: 10}}>
            {item.key}
          </Text>
          <Button
            icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#03A9F4'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        </Card>
      </Animated.View>
    );
  }
}

export default class ClickCard extends React.Component {
  static CardItem = CardItem;

  state = {
    item: null,
    openProgress: new Animated.Value(0),
    isAnimating: false
  };

  open = item => {
    console.log("test12321312",item)
    this.setState({ item, isAnimating: true }, () => {
      Animated.timing(this.state.openProgress, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start(() => {
        this.setState({ isAnimating: false });
      });
    });
  };

  close = item => {
    this.setState({ item: null, isAnimating: true }, () => {
      Animated.timing(this.state.openProgress, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start(() => {
        this.setState({ isAnimating: false });
      });
    });
  };

  render() {
    const { item, openProgress, isAnimating } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {this.props.renderContent({ onClick: this.open })}
        <DetailScreen
          photo={item}
          onClose={this.close}
          openProgress={openProgress}
          isAnimating={isAnimating}
        />
      </View>
    );
  }
}
