const FETCH_TASKS = 'FETCH_TASKS';
const FETCH_TASK_SINGLE = 'FETCH_TASK_SINGLE';

const initialState = {
  tasks: [],
  tak: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TASKS: {
      return {
        ...state,
        tasks: action.payload,
      };
    }
    case FETCH_TASK_SINGLE: {
      return { ...state, task: action.payload };
    }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;

export const fetchTasks = payload => ({
  type: FETCH_TASKS,
  payload,
});
export const fetchTaskSingle = payload => ({
  type: FETCH_TASK_SINGLE,
  payload,
});
