/*
 * @Author: your name
 * @Date: 2021-02-02 21:30:41
 * @LastEditTime: 2021-02-04 21:43:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\views\guideManage\NotContralCom\index.js
 */
import React, { Component, Fragment } from "react";
/* 
  非受控组件
 */

class NameForm extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.input = React.createRef()
        this.state = {
            value: ''
        }
    }
    // props默认值，类似于vue中的props
    static defaultProps = {
        name: '李四'
    }
    handleSubmit(e) {
        this.setState({
            value: this.input.current.value
        })
        setTimeout(() => {
            alert(this.props.name + this.state.value)
        }, 0);
        e.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" defaultValue="Bob" ref={this.input} />
                <input type="submit" />
            </form>
        )
    }
}

class FileInput extends Component {
    constructor(props) {
        super(props)
        this.fileInput = React.createRef()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        console.log(this.fileInput.current.files)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {/* 
                在 React 中，<input type="file" /> 始终是一个非受控组件，
                因为它的值只能由用户设置，而不能通过代码控制。
                */}
                <input type="file" ref={this.fileInput} />
                <input type="submit" />
            </form>
        )
    }
}

export default class NotContralCom extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <NameForm name="张大仙" />
                <FileInput />
            </div>
        )
    }
}