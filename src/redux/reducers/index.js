import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

export default combineReducers({ reducer }, applyMiddleware(thunk));
