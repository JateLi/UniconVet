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
            cartgoryList: []

        });

const uvReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //TODO update cart list.
        //TODO Update item in cart by id. 
        //TODO Remove item in cart by id.
        case 'UPDATE_PRODUCTIONS':
            const productions = action.payload
            console.log(productions)
            return state.set('productionList', Immutable.fromJS(productions));

        default:
            return state
    }
};

export default combineReducers({
    uvRedux: uvReducer,
});    