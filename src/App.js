/*
 * @Author: your name
 * @Date: 2021-01-27 13:11:22
 * @LastEditTime: 2021-02-28 20:08:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\views\App.js
 */

import React, { Component } from "react";
import RouterIndex from "@/router";
import store from "@/store"
console.log(store)
export default class App extends Component {
    constructor(props) {
        super(props)
        // 获取store
        this.store = store.getState()
    }
    render() {
        return (
            <div>
                {/* {this.store.list} */}
                <RouterIndex></RouterIndex>
            </div>
        );
    }
}
