// import { TOGGLE_SIDEBAR } from '../constants';
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
const initialState = {
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TOGGLE_SIDEBAR: {
      return state
    }
    default:
      return state;
  }
}
