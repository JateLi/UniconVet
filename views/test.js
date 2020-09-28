import React, { Component } from 'react';
import { View, Text } from 'react-native';

//rnce
class test extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> test </Text>
      </View>
    );
  }
}

//rnss
const styles = StyleSheet.create({
   testHolder:{
       height: '100%',
       width: '100%',
       flex: 1,
       justifyContent: 'center',
   } 
});

export default test;
