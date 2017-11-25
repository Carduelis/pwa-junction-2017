import { combineReducers } from 'redux';
import bandsReducer from './bandsReducer';

export default combineReducers({
	bands: bandsReducer
});
