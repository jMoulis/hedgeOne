const SET_FORCE_SELECTED_ITEM = 'SET_FORCE_SELECTED_ITEM';
const SET_FORCE_DATA = 'SET_FORCE_DATA';
const EDIT_FORCE_DATA = 'EDIT_FORCE_DATA';
const DELETE_FORCE_DATA = 'DELETE_FORCE_DATA';
const CREATE_FORCE_DATA = 'CREATE_FORCE_DATA';

const initState = {
  forceSelectedItem: null,
  forceData: null,
};

const forceReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_FORCE_SELECTED_ITEM:
      return { ...state, selectedItem: action.payload };
    case SET_FORCE_DATA: {
      return {
        ...state,
        forceData: {
          ...state.forceData,
          ...action.payload,
        },
      };
    }
    case EDIT_FORCE_DATA: {
      return { ...state, forceData: { ...state.forceData, ...action.payload } };
    }
    case CREATE_FORCE_DATA: {
      return { ...state, forceData: { ...state.forceData, ...action.payload } };
    }
    case DELETE_FORCE_DATA: {
      const filteredData = { ...state.forceData };
      delete filteredData[action.payload];
      return { ...state, forceData: filteredData };
    }
    default:
      return state;
  }
};

export const setForceSelectedItem = payload => {
  return {
    type: SET_FORCE_SELECTED_ITEM,
    payload,
  };
};
export const setForceData = payload => ({
  type: SET_FORCE_DATA,
  payload,
});
export const editForceData = payload => ({
  type: EDIT_FORCE_DATA,
  payload,
});
export const deleteForceData = payload => ({
  type: DELETE_FORCE_DATA,
  payload,
});
export const createForceData = payload => ({
  type: CREATE_FORCE_DATA,
  payload,
});
export default forceReducer;
