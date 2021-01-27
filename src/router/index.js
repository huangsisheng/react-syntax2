/*
 * @Author: your name
 * @Date: 2021-01-27 13:16:16
 * @LastEditTime: 2021-01-27 15:27:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\router\index.js
 */
import { Component } from "react";

import { Router,Route, Link } from "react-router-dom";
import { createHashHistory } from "history";
//
import Accessbility from "@/views/a_Accessbility";

export default class RouterIndex extends Component {
  render() {
    return (
      <Router history={createHashHistory()}>
        <Route path="/" component={Accessbility}>
          <Route path="/Accessbility" component={Accessbility}>
            <Link to="/Accessbility">无障碍</Link>
          </Route>
        </Route>
      </Router>
    );
  }
}
