/*
 * @Author: your name
 * @Date: 2021-02-28 19:14:10
 * @LastEditTime: 2021-02-28 20:24:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\store\index.js
 */
import { createStore } from "redux"
import reducer from "./reduce";

const store = createStore(
    reducer,
    // 为了能在谷歌浏览器上去使用devtools调试工具
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store