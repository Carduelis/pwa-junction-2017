import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import mainDataReducer from './mainDataReducer';

export default combineReducers({
	data: mainDataReducer,
	ui: uiReducer
});
