/*
 * @Author: your name
 * @Date: 2021-01-27 13:11:22
 * @LastEditTime: 2021-01-27 15:07:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\views\App.js
 */

import React, { Component } from "react";
import RouterIndex from "@/router";

export default class App extends Component {
  render() {
    return (
      <div>
        <aside className="layout-left">
          <RouterIndex></RouterIndex>
        </aside>
        <div className="layout-right">
          <header></header>
          <main></main>
        </div>
      </div>
    );
  }
}
