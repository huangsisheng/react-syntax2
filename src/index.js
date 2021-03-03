/*
 * @Author: your name
 * @Date: 2021-01-27 12:36:29
 * @LastEditTime: 2021-03-03 14:26:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\index.js
 */
import React from "react";
import ReactDOM from "react-dom";
import "@/style/index.css";
// import App from "./App";

import store from "./react-redux-store";
import TodoList from "./views/reactRedux/a_NewTodoList";
import { Provider } from "react-redux";
const App = (
  // 让所有被包裹的组件都能使用store
  <Provider store={store}>
    <TodoList />
  </Provider>
);

ReactDOM.render(App, document.getElementById("root"));
