import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Dimensions,
  TouchableOpacity,
  Animated
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';


const maxWidth = Dimensions.get('window').width;
const maxHeight = Dimensions.get('window').height;

export default class DetailScreen extends React.Component {
  state = {
    localPhoto: null
  };

  componentWillReceiveProps(nextProps) {
    const { photo } = nextProps;
    if (photo) {
      this.setState({ localPhoto: photo });
    }
  }

  render() {
    const { onClose, openProgress, isAnimating } = this.props;
    const { localPhoto } = this.state;
    if (localPhoto) {
      return (
        <Animated.View
          style={[StyleSheet.absoluteFill]}
          pointerEvents={isAnimating || this.props.photo ? 'auto' : 'none'}
        >
          <Animated.View 
            ref={r => (this._openingImageRef = r)}
            style={{
              width: maxWidth,
              height: 300,
              opacity: openProgress.interpolate({
                inputRange: [0, 0.99, 0.995],
                outputRange: [0, 0, 1]
              })
            }}>
            <LinearGradient 
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={{ flex:1 }}>
              <Image 
                source={require('./img/pic.jpg')}
                style={{ flex:1 }}/>
            </LinearGradient>
          </Animated.View>



          
          <Animated.View
            style={[
              styles.body,
              {
                justifyContent: 'center',
                alignItems: 'center',
                opacity: openProgress,
                backgroundColor: '#fff',
                transform: [
                  {
                    translateY: openProgress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [100, 0]
                    })
                  }
                ]
              }
            ]}
          >
            <View style={styles.content}>
              <Text style={styles.title}>
                - {localPhoto.key}
              </Text>
              <Text style={styles.description}>
                123
              </Text>
            </View>
          </Animated.View>


          <Animated.View
            style={{
              position: 'absolute',
              top: 20,
              left: 20,
              opacity: openProgress
            }}
            pointerEvents={isAnimating ? 'none' : 'auto'}
          >
            <TouchableOpacity
              onPress={() => onClose(localPhoto.id)}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
      );
    }
    return <View />;
  }
}

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 22,
    fontWeight: '600',
    // fontFamily: 'Avenir Next',
    lineHeight: 50
  },
  description: {
    color: '#333',
    fontSize: 14
    // fontFamily: 'Avenir Next'
  },
  body: { flex: 1, padding: 15 },
  closeText: { color: 'white', backgroundColor: 'transparent' },
  closeButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'white',
    borderRadius: 5
  },
  content:{
    top: -60,
    width: maxWidth / 10 * 9,
    height: maxHeight / 10 *6 ,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0.1, height: 1 },
    shadowOpacity: 1 ,
    shadowRadius: 1,
  }
});
