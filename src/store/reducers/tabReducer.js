const SET_TABS = 'SET_TABS';
const REMOVE_TAB = 'REMOVE_TAB';
const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';

const initialState = {
  tabs: [],
  activeTab: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TABS: {
      return { ...state, tabs: [...state.tabs, action.payload] };
    }
    case SET_ACTIVE_TAB: {
      return { ...state, activeTab: action.payload };
    }
    case REMOVE_TAB: {
      const filteredTabs = state.tabs.filter(
        prevTab => prevTab.tabId !== action.payload
      );
      return { ...state, tabs: filteredTabs };
    }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;

export const setTabs = payload => ({
  type: SET_TABS,
  payload,
});
export const setActiveTab = payload => ({
  type: SET_ACTIVE_TAB,
  payload,
});
export const removeTab = payload => ({
  type: REMOVE_TAB,
  payload,
});
