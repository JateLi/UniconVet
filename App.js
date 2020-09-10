import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Text
} from 'react-native';

import PageNavigator from './components/pageNavigator'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.statusBar} />
        <StatusBar barStyle="light-content" />
        <PageNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  statusBar: {
    flex: 0,
    backgroundColor: 'black'
  },
  container: {
    flex: 1,
  }
});
