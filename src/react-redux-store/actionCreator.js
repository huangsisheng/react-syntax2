/*
 * @Author: your name
 * @Date: 2021-03-03 14:48:04
 * @LastEditTime: 2021-03-03 15:08:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\react-redux-store\actionCreator.js
 */
import * as types from "./actionTypes";

export const getInputChange = (value) => ({
  type: types.CHNAGE_INPUT_VALUE,
  value,
});

export const getAddChange = () => ({
  type: types.ADD_ITEM,
});

export const getDeleteChange = (index) => ({
  type: types.DELETE_ITEM,
  index,
});

export const initActionList = (list) => ({
  type: types.INIT_TODO_LIST,
  list,
});
