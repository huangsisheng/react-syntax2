/*
 * @Author: your name
 * @Date: 2021-03-03 10:17:13
 * @LastEditTime: 2021-03-03 11:36:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\store\sagas.js
 */
import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { initToList } from "./actionCreator";
import { GET_INIT_LISTS } from "./actionTypes";
// 必须导出generator 生成器函数

function* getList() {
  try {
    const res = yield axios.get(
      "https://api.apiopen.top/getJoke?page=1&count=2&type=video"
    );
    const { result } = res.data;
    const data = result.map((item) => item.name);
    const action = initToList(data);
    // 派发action 通知reducer去更改状态
    yield put(action);
  } catch (error) {}
}

function* mySaga() {
  yield takeEvery(GET_INIT_LISTS, getList);
}

export default mySaga;
