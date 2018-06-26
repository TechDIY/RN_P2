/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


type Props = {};
export default class HeaderInfo extends Component<Props> {
  render() {
    return (
    	<View>
	      <View style={styles.container}>
	        <Text style={styles.TextTitel}>
	            All
	        </Text>
	        <Text style={styles.TextTitel}>
	            Easy
	        </Text>
	        <Text style={styles.TextTitel}>
	            Med
	        </Text>
	        <Text style={styles.TextTitel}>
	            Hard
	        </Text>
	      </View>

	      <View style={styles.container}>
	        <Text style={styles.TextNum}>
	            10
	        </Text>
	        <Text style={styles.TextNum}>
	            10
	        </Text>
	        <Text style={styles.TextNum}>
	            0
	        </Text>
	        <Text style={styles.TextNum}>
	            0
	        </Text>
	      </View>
	    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  TextTitel: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 20
  },
  TextNum: {
  	color: '#777777',
    fontSize: 18,
    textAlign: 'center',
    padding: 20
  }
});
