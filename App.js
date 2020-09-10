import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View
} from 'react-native';

//Redux import
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import uvReducer from './reducer/uvReducer';

import PageNavigator from './components/pageNavigator'

const store = createStore(uvReducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <SafeAreaView style={styles.statusBar} />
          <StatusBar barStyle="light-content" />
          <PageNavigator />
        </View>
      </Provider>
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
