import { createStore } from 'redux';
import reducer from './reducers/combineReducer';

const store = createStore(reducer);
export default store;