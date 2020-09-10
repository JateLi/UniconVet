import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    PixelRatio
} from 'react-native';

let { width, height } = Dimensions.get('window');

class CartRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item,
        };
    }

    onPress = (id) => {
        const { onPress } = this.props;
        onPress(id);
    }

    render() {
        const item = this.state.item

        return (
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => this.onPress(item.key)}>
                    <View style={styles.buttonHolder}>
                        <Text style={styles.buttonLabel}>{item.title} </Text>
                        <Text style={styles.buttonLabel}>{item.quantity} </Text>
                        <Text style={styles.buttonLabel}>{item.price} </Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonHolder: {
        width: width,
        padding: 30 / PixelRatio.get(),
        backgroundColor: 'white',
        marginBottom: 30 / PixelRatio.get(),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonLabel: {
        fontSize: 20,
        fontWeight: '400'
    }
});

export default CartRow;