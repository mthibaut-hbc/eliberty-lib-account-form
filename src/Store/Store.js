import { createStore } from 'redux';
import reducer from '../Reducers/Reducers';
import initialState from '../Config/defaultState';

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;