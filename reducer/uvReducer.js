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
        //TODO update production list.
        //TODO update cart list.
        //TODO Update item in cart by id. 
        //TODO Remove item in cart by id.
        default:
            return state
    }
};

export default combineReducers({
    uvRedux: uvReducer,
});    