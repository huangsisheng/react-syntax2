/*
 * @Author: your name
 * @Date: 2021-03-01 22:52:47
 * @LastEditTime: 2021-03-03 11:36:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\store\actionCreator.js
 */
import {
  CHNAGE_INPUT_VALUE,
  ADD_ITEM,
  DELETE_ITEM,
  INIT_TODO_LIST,
  GET_INIT_LISTS,
} from "./actionTypes";

// import axios from 'axios'

export const getInputChange = (value) => ({
  type: CHNAGE_INPUT_VALUE,
  value,
});
export const getAddChange = () => ({
  type: ADD_ITEM,
});
export const getDeleteChange = (index) => ({
  type: DELETE_ITEM,
  index,
});
export const initToList = (data) => ({
  type: INIT_TODO_LIST,
  data,
});

export const getInitList = () => ({
  type: GET_INIT_LISTS,
});

// export const getTodoList = () => {
//     return (dispatch) => {
//         axios.get('https://api.apiopen.top/getJoke?page=1&count=2&type=video').then((res) => {
//             console.log(res.data)
//             const { result } = res.data
//             const data = result.map(item => item.name)
//             const action = initToList(data)
//             dispatch(action)
//         })
//     }
// }
