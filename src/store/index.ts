import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import taskReducer from 'store/reducers/taskReducer';

const rootReducer = combineReducers({
  taskReducer,
});
const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancers);

export default store;
