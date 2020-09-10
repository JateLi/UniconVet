import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
  Text
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <SafeAreaView style={styles.statusBar} />
        <View style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Text>Testetest</Text>
        </View>
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
