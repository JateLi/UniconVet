import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    FlatList,
    PixelRatio
} from 'react-native';

const { width, height } = Dimensions.get('window');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { updateProductionList, addToCart, updateCartItem } from '../actions/uvActions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductionRow from '../components/productionRow'

class Productions extends React.Component {
    componentDidMount() {
        this.props.updateProductionList()
    }

    onPressProduction = (id) => {
        console.log(id)
        const productionList = this.props.uvRedux.get('productionList')
        var cartgoryList = this.props.uvRedux.get('cartgoryList')

        //TODO update quantity of cart item.
        // if (cartgoryList != [] && cartgoryList != undefined) {
        //     console.log(cartgoryList)
        //     let selectedUpdateItem = cartgoryList.filter(item => item.get('id') == id)
        //     if (selectedUpdateItem) {
        //         selectedUpdateItem = selectedUpdateItem.get(0)
        //         console.log(selectedUpdateItem)
        //         const updateCartItem = {
        //             id: selectedUpdateItem.get('id'),
        //             name: selectedUpdateItem.get('name'),
        //             quantity: selectedUpdateItem.get('quantity'),
        //             price: selectedUpdateItem.get('price'),
        //         }
        //         this.props.updateCartItem(updateCartItem, id)
        //         console.log("dsf" + selectedUpdateItem)
        //     }
        // }

        let selectedItem = productionList.filter(item => item.get('id') == id).get(0)

        const newCartItem = {
            id: selectedItem.get('id'),
            name: selectedItem.get('name'),
            quantity: 1,
            price: selectedItem.get('price'),
        }

        this.props.addToCart(newCartItem)

    }

    navToCart = () => {
        this.props.navigation.navigate('Cart')
    }

    returnTopBarButton = (buttonText, side) => {
        if (buttonText == '') return <View />

        const topBarButton = <TouchableOpacity
            onPress={() => this.navToCart()}>
            <View style={styles.topBarButton}>
                <Text>{buttonText}</Text>
            </View>
        </TouchableOpacity>

        return topBarButton
    }

    returnProductionList = () => {
        const productionList = this.props.uvRedux.get('productionList')
        var performList = []

        if (productionList != []) {
            for (let i = 0; i < productionList.size; i++) {
                const id = productionList.getIn([i, "id"])
                const title = productionList.getIn([i, "name"])
                const price = productionList.getIn([i, 'price'])

                performList.push({ title: title, price: price, key: String(id) })
            }
        }
        return performList
    }

    /**
     * Create FlatList with Production List Sample Data. 
     */
    returnFlatList = () => {
        const list = this.returnProductionList()
        const flatList = <FlatList
            style={styles.flatListHolder}
            data={list}
            renderItem={({ item }) =>
                <ProductionRow item={item} onPress={this.onPressProduction} />
            } />
        return flatList
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBarHolder}>
                    <View style={styles.titleHolder}>
                        <View style={{ width: wp('90%'), alignItems: 'center' }}>
                            <Text>{'Production'}</Text>
                        </View>
                    </View>
                    {this.returnTopBarButton('', 'left')}
                    {this.returnTopBarButton('Cart', 'right')}
                </View>
                {this.returnFlatList()}
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
    topBarButton: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    flatListHolder: {
        borderTopColor: 'white',
        borderTopWidth: 10 / PixelRatio.get(),
        width: width
    }
});

const mapStateToProps = (state) => {
    const { uvRedux } = state
    return { uvRedux }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        updateProductionList,
        addToCart,
        updateCartItem
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Productions);
