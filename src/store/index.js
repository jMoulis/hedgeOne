import { createStore, combineReducers } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import tabReducer from 'store/reducers/tabReducer';
import forceReducer from 'store/reducers/forceReducer';

const rootReducer = combineReducers({
  tabReducer,
  forceReducer,
});
const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancers);

export default store;
