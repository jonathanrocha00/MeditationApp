import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, Button, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }, 
  body: {
    flex: 9,
    backgroundColor: 'skyblue',
  },
  lowerTab: {
    flex: 1,
    backgroundColor: 'powderblue',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
  },
  meditationContainer: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  meditationContainerBig: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  meditationIconContainer: {
    height: 70,
    width: 70,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  meditationIconContainerBig: {
    height: 120,
    width: 120,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blue1: {
    backgroundColor: '#CCE2FB',
  },
  blue2: {
    backgroundColor: '#8BB6F3',
  },
  blue3: {
    backgroundColor: '#79A4EA',
  },
  blue4: {
    backgroundColor: '#6990E7',
  },
  blue5: {
    backgroundColor: '#5774D8',
  },
});

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={[styles.meditationContainerBig, styles.blue5]}>
            <View style={styles.meditationIconContainerBig}>
              <Image source={require('./assets/meditation.png')} style={{width: 40, height: 40}} />
            </View>
          </View>
          <View style={[styles.meditationContainer, styles.blue4]}>
            <View style={styles.meditationIconContainer}>
              <Image source={require('./assets/meditation.png')} style={{width: 40, height: 40}} />
            </View>
          </View>
          <View style={[styles.meditationContainer, styles.blue3]}>
            <View style={styles.meditationIconContainer}>
              <Image source={require('./assets/meditation.png')} style={{width: 40, height: 40}} />
            </View>
          </View>
          <View style={[styles.meditationContainer, styles.blue2]}>
            <View style={styles.meditationIconContainer}>
              <Image source={require('./assets/meditation.png')} style={{width: 40, height: 40}} />
            </View>
          </View>
          <View style={[styles.meditationContainer, styles.blue1]}>
            <View style={styles.meditationIconContainer}>
              <Image source={require('./assets/meditation.png')} style={{width: 40, height: 40}} />
            </View>
          </View>
        </View>
        <View style={styles.lowerTab}>
        <View style={styles.iconContainer}>
          <Image source={require('./assets/touch.png')} style={{width: 40, height: 40}} />
        </View>
        <View style={styles.iconContainer}>
          <Image source={require('./assets/touch.png')} style={{width: 40, height: 40}} />
        </View>
        <View style={styles.iconContainer}>
          <Image source={require('./assets/touch.png')} style={{width: 40, height: 40}} />
        </View>
        </View>
      </View>
    );
  }
}
