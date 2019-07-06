import {handleActions} from 'redux-actions';

import {COUNTER_DECREMENT,COUNTER_INCREMENT} from '../actiontypes/index'

const defaultState = 19;

export const counter =  handleActions({
    [COUNTER_INCREMENT](state,{payload}) {
      console.log(payload)  
      return state + 1;
    },
    [COUNTER_DECREMENT](state,{payload}) {
      console.log(payload)  
      return state - 1;
    },
  }, defaultState);