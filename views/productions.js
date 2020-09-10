import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    StatusBar,
    View,
    Text,
    Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class Productions extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBarHolder}>
                    <View style={styles.titleHolder}>
                        <View style={{ width: wp('90%'), alignItems: 'center' }}>
                            <Text>{'Production'}</Text>
                        </View>
                    </View>
                    <Text>Cart</Text>
                    <Text>Cart</Text>
                </View>
                <Text>Testestest</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        height: '100%',
        width: '100%',
        alignItems: 'center',

    },
    topBarHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width,
        height: hp('9%'),
        backgroundColor: 'lightgray',
        paddingLeft: wp('3%'),
        paddingRight: wp('3%'),
    },
    titleHolder: {
        position: 'absolute',
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    barHolder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
