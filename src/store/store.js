// store/index.js
import { createStore } from 'redux';
import authReducer from '../Components/reducers/authReducer';

const store = createStore(authReducer);

export default store;
