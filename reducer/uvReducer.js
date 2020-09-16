import { combineReducers } from 'redux';
import Immutable from 'immutable';
import { updateCartItem } from '../actions/uvActions';

const INITIAL_STATE =
    Immutable.fromJS(
        {
            // {
            //     id: 1,
            //     name: 'Sledgehammer',
            //     price: 125.76
            //   },
            productionList: [],

            // {
            //     id: 1,
            //     name: 'Sledgehammer',
            //     quantity: 1, 
            //     price: 125.76
            //   },
            cartList: []

        });

const uvReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'UPDATE_PRODUCTIONS':
            const productions = action.payload
            console.log(productions)
            return state.set('productionList', Immutable.fromJS(productions));

        case 'ADD_NEW_ITEM':
            const newItem = action.newItem
            console.log(newItem)
            return state.update('cartList', cartList => cartList.push(Immutable.fromJS(newItem)));

        case 'DELETE_ITME_BY_ID':
            const deleteId = parseInt(action.id)
            var filterList = state.get('cartList').filter(item => item.get('id') !== deleteId)
            return state.set('cartList', Immutable.fromJS(filterList));

        case 'UPDATE_SELECT_ITEM':
            const updateItem = action.updateItem
            const updateId = action.updateId
            const index = state.get('cartList').findIndex(obj => obj.get('id') == updateId)
            state = state.setIn(['cartList', index], Immutable.fromJS(updateItem))
            return state
        default:
            return state
    }
};

export default combineReducers({
    uvRedux: uvReducer,
});    