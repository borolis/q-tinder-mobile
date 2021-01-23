import {combineReducers} from 'redux';
import searchScreenReducer from './searchScreenReducer';
import apiMethodsReducer from './apiMethodsReducer';
export default combineReducers({
  searchScreen: searchScreenReducer,
  apiMethods: apiMethodsReducer,
});
