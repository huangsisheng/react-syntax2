/*
 * @Author: your name
 * @Date: 2021-03-03 13:33:24
 * @LastEditTime: 2021-03-03 15:12:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\react-redux-store\reducer.js
 */
import * as types from "./actionTypes";
const defaultState = {
  inputVal: "Hello World!!",
  list: [1, 2],
};
export default (state = defaultState, action) => {
  if (action.type === types.INIT_TODO_LIST) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.list;
    return newState;
  }
  if (action.type === types.CHNAGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputVal = action.value;
    return newState;
  }
  if (action.type === types.ADD_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputVal);
    newState.inputVal = "";
    return newState;
  }
  if (action.type === types.DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }

  return state;
};
