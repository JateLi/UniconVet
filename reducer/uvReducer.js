import { combineReducers } from 'redux';
import Immutable from 'immutable';

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
            cartgoryList: []

        });

const uvReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //TODO Remove item in cart by id.
        case 'UPDATE_PRODUCTIONS':
            const productions = action.payload
            console.log(productions)
            return state.set('productionList', Immutable.fromJS(productions));

        case 'ADD_NEW_ITEM':
            const newItem = action.newItem
            console.log(newItem)
            return state.update('cartgoryList', cartgoryList => cartgoryList.push(Immutable.fromJS(newItem)));

        case 'DELETE_ITME_BY_ID':
            const deleteId = parseInt(action.id)
            var filterList = state.get('cartgoryList').filter(item => item.get('id') !== deleteId)
            return state.set('cartgoryList', Immutable.fromJS(filterList));

        case 'UPDATE_SELECT_ITEM':
            return state

        default:
            return state
    }
};

export default combineReducers({
    uvRedux: uvReducer,
});    