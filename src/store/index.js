import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import forceReducer from './reducers/forceReducer';

const store = createStore(forceReducer);

export default store;
