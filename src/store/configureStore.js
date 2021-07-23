import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import employeeReducer from '../reducers/employeeReducer'; 

const configureStore = () => {
    const store = createStore(combineReducers({
        employeeList:employeeReducer
    }), applyMiddleware(thunk));
    return store;
}

export default configureStore;