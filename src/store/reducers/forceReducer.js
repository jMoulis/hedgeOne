const SET_SELECTED_NODE = 'SET_SELECTED_NODE';

const forceReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SELECTED_NODE:
      return state;

    default:
      return state;
  }
};

export const setSelectedNodeRedux = () => {
  return {
    type: SET_SELECTED_NODE,
  };
};
export default forceReducer;
