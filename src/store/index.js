/*
 * @Author: your name
 * @Date: 2021-02-28 19:14:10
 * @LastEditTime: 2021-03-01 23:03:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\store\index.js
 */
import { createStore } from "redux"
import reducer from "./reduce";
// store是唯一的，只有store可以改变自己的内容
const store = createStore(
    reducer,
    // 为了能在谷歌浏览器上去使用devtools调试工具
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store