import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    StatusBar,
    View,
    Text
} from 'react-native';


export default class Cart extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Cart</Text>
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
