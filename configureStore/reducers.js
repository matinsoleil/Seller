import { combineReducers } from 'redux';
import {counter} from '../axion/reducers/counter';

const reducers = {
  counter,
};
export default combineReducers(reducers);