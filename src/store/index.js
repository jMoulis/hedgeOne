import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import tabReducer from 'store/reducers/tabReducer';

const rootReducer = combineReducers({
  tabReducer,
});
const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancers);

export default store;
