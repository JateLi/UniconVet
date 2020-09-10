import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    StatusBar,
    View,
    Text
} from 'react-native';


export default class Productions extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>test</Text>
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
