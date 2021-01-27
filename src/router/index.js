/*
 * @Author: your name
 * @Date: 2021-01-27 13:16:16
 * @LastEditTime: 2021-01-27 18:13:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\router\index.js
 */
import { Component } from "react";

import { Router, Route, Link } from "react-router-dom";
import { createHashHistory } from "history";
//
import Accessbility from "@/views/guideManage/a_Accessbility";
import CodeSplit from "@/views/guideManage/b_CodeSplit";

const context = require.context("../views", true, /\.js$/);
function importAll(r) {
  const reg = /([./])(w+)([/])(w+)([/]w+\.js)$/;
  return r.keys()
}
// .map((key) => key.match(reg));
importAll(context);

console.log(importAll(context));

export default class RouterIndex extends Component {
  render() {
    return (
      <Router history={createHashHistory()}>
        <div className="mainDiv">
          <div className="leftNav">
            <h3 className="page-title">react学习</h3>
            <section>
              <h4>高级指引</h4>
              <ul>
                <li>
                  <Link to="/Accessbility">无障碍</Link>
                </li>
                <li>
                  <Link to="/CodeSplit">代码分割</Link>
                </li>
              </ul>
            </section>
          </div>

          <div className="rightMain">
            <Route path="/Accessbility" exact component={Accessbility} />
            <Route path="/CodeSplit" exact component={CodeSplit} />
          </div>
        </div>
      </Router>
    );
  }
}
