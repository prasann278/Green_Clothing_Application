import {createStore} from 'redux';
import {Reducers} from '../reducers/Reducers';
import {Reducers2} from '../reducers/Reducer2';
import {combineReducers} from 'redux';

const routeReducer = combineReducers({Reducers, Reducers2});

export const store = createStore(routeReducer);
