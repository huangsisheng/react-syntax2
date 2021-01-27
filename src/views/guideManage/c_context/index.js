/*
 * @Author: your name
 * @Date: 2021-01-27 23:01:33
 * @LastEditTime: 2021-01-27 23:18:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\views\guideManage\c_context\index.js
 */

/**
 * Context 
 * 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。
 */
import React, { Component } from 'react'

export default class Context extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {'context'}
            </div>
        )
    }
}