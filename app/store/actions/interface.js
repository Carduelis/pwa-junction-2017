import {
  TOGGLE_SIDEBAR
} from '../../constants/action-types';


export function toggleSidebar() {
  return {
    type: TOGGLE_SIDEBAR
  };
}


export function closeSidebar() {
  return {
    type: TOGGLE_SIDEBAR,
    payload: {
      sidebarVisibility: false
    }
  };
}
