/*
 * @Author: your name
 * @Date: 2021-01-27 13:11:22
 * @LastEditTime: 2021-03-01 21:43:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\views\App.js
 */

import React, { Component } from "react";
import RouterIndex from "@/router";
export default class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <RouterIndex></RouterIndex>
            </div>
        );
    }
}
