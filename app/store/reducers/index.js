import { combineReducers } from 'redux';

const reducerThatNeedsToBeReplaced = function(state = {}, action) {
	const { type, payload = {} } = action;
	switch (type) {
		case 'ADD_FORM': {
      return Object.assign({}, state);
    }
  }
  return state;
}

export default combineReducers({
	data: reducerThatNeedsToBeReplaced
	// counter
});
