import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';
import PHOTOS from './src/data';
import { processImages, buildRows, normalizeRows } from './src/utils';
import ClickCard from './src/ClickCard';
import CardItem from './src/Carditem';

const maxWidth = Dimensions.get('window').width;

const datas = [
  {key: 'Simon Mignolet',Level:1},
  {key: 'Nathaniel Clyne',Level:2},
  {key: 'Dejan Lovren',Level:3},
  {key: 'Mama Sakho',Level:1},
  {key: 'Alberto Moreno',Level:2},
  {key: 'Emre Can',Level:3},
  {key: 'Joe Allen',Level:2},
  {key: 'Phil Coutinho',Level:1},
];

export default class App extends React.Component {
  constructor(props) {
    super(props);  
    
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(datas)
    };
  };

  renderRow = (onClick, row) =>
    <View
      style={{
        marginTop: 10,
        justifyContent: 'space-between'
      }}
    >
      <CardItem item={row} onClick={onClick}/>
    </View>;

  render() {
    return (
        <ClickCard
          renderContent={({ onClick }) =>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this , onClick)}
          />}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
