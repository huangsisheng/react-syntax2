/*
 * @Author: your name
 * @Date: 2021-03-01 21:35:00
 * @LastEditTime: 2021-03-02 22:42:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\views\redux\a_actionReducer.js
 */

// 容器组件 做逻辑操作的

import React, { Component, createRef } from 'react'
import TodoListUI from "./TodoListUI"
import store from "@/store"
import {
    getInputChange,
    getAddChange,
    getDeleteChange,
    getTodoList
} from "@/store/actionCreator"


export default class ActionReducer extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.handleAddItem = this.handleAddItem.bind(this)

        // 订阅store的改变，
        this.handleStoreChange = this.handleStoreChange.bind(this)
        store.subscribe(this.handleStoreChange)

    }

    render() {
        return (
            <TodoListUI
                handleChangeInput={this.handleChangeInput}
                handleAddItem={this.handleAddItem}
                handleDeleteItem={this.handleDeleteItem}
                list={this.state.list}
                inputVal={this.state.inputVal}
            />
        )
    }
    componentDidMount() {
        // 使用了redux-thunk 中间件，使得 action可以处理并返回一个异步函数
        const action = getTodoList()
        // 这里action自动会处理，将dispatch作为参数传递
        store.dispatch(action)
    }
    handleChangeInput(e) {
        const action = getInputChange(e.target.value)
        // 派发事件
        store.dispatch(action)
    }
    handleAddItem(e) {
        const action = getAddChange()
        store.dispatch(action)
    }

    handleDeleteItem(index, e) {
        console.log(e)
        const action = getDeleteChange(index)
        store.dispatch(action)
    }

    // 拿到store新的状态，并改变state，渲染到页面
    handleStoreChange() {
        this.setState(store.getState())
    }

    /*     <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
        <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
    上述两种方式是等价的，分别通过箭头函数和 Function.prototype.bind 来实现。
    
     在这两种情况下，React 的事件对象 e 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递*/

}