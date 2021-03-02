/*
 * @Author: your name
 * @Date: 2021-03-02 20:58:21
 * @LastEditTime: 2021-03-02 21:31:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\views\redux\a_actionReducer\TodoListUI.js
 */

import { Component, createRef, Fragment } from "react";

// UI组件：只展示页面渲染的内容，不做逻辑处理
/* 
无状态组件：当一个组件中只有render时；可以用函数组件来替换class类组件，
这样性能会更好，因为class类组件中还有生命周期会执行
*/
const TodoListUI = (props) => {
    return (
        <Fragment>
            <input type="text" value={props.inputVal} onChange={props.handleChangeInput} />
            <button onClick={props.handleAddItem}>提交</button>
            <ul>
                {
                    props.list.map((item, index) => <li key={item + index}>{item} <span onClick={(e) => { props.handleDeleteItem(index, e) }}>删除</span></li>)
                }
            </ul>
        </Fragment>
    )
}
export default TodoListUI
/* class TodoListUI extends Component {
    constructor(props) {
        super(props)
        this.input = createRef()
    }

    render() {
        return (
            <Fragment>
                <input type="text" ref={this.input} value={this.props.inputVal} onChange={this.props.handleChangeInput} />
                <button onClick={this.props.handleAddItem}>提交</button>
                <ul>
                    {
                        this.props.list.map((item, index) => <li key={item + index}>{item} <span onClick={(e) => { this.props.handleDeleteItem(index, e) }}>删除</span></li>)
                    }
                </ul>
            </Fragment>
        )
    }
} */
