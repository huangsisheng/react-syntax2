/*
 * @Author: your name
 * @Date: 2021-01-27 23:01:33
 * @LastEditTime: 2021-01-31 10:19:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\views\guideManage\c_context\index.js
 */

/**
 * Context 
 * 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。
 * 数据是通过 props 属性自上而下（由父及子）进行传递的
 */
import React, { Component } from 'react'

// 1.何时使用react：
/**
 * Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据，
 * 例如当前认证的用户、主题或首选语言。
 * Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
 * 参考 vue 的provider/inject
 */
// 为当前的 theme 创建一个 context（“light”为默认值）。
const ContextTheme = React.createContext('light')

class App extends Component {
    constructor(props) { super(props) }
    render() {
        // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
        // 无论多深，任何组件都能读取这个值。
        // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
        // ContextTheme._currentValue：默认值
        console.log(ContextTheme)
        return (
            <ContextTheme.Provider value="light">
                <Toolbar />
            </ContextTheme.Provider>
        )
    }
}

// 中间组件不必再往下传递
function Toolbar() {
    return (<div><ThemeButton /></div>)
}
class ThemeButton extends Component {
    static contextType = ContextTheme
    render() {
        console.log(this.context)
        return (
            <button theme={this.context}>主题是：{this.context}</button>
        )
    }
}

// b.使用Context之前的考虑：
/**
 * Context主要用于很多不同层级的组件需要访问同样的数据，
 * 可能会使得组件的复用性变差，故需谨慎使用
 * 
 * 如果你只是想避免层层传递一些属性，组件组合有时候是一个比 context 更好的解决方案。
 */

// c.API使用：
const defaultValue = 'defaultValue'
const MyContext = React.createContext(defaultValue)
/**
 * 创建一个 Context 对象。当 React 渲染一个订阅了这个 Context 对象的组件，
 * 这个组件会从组件树中离自身最近的那个匹配的 Provider 中读取到当前的 context 值。
 * 
 * 只有当组件所处的树中没有匹配到 Provider 时，其 defaultValue 参数才会生效。
 * 这有助于在不使用 Provider 包装组件的情况下对组件进行测试。
 * 注意：将 undefined 传递给 Provider 的 value 时，消费组件的 defaultValue 不会生效。
 * 
 */

// (<MyContext.Provider value={'某个值'} ></MyContext.Provider>)

/**
 * 每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化
 * 
 * 当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染。
 * Provider 及其内部 消费者(consumer) 组件都不受制于 shouldComponentUpdate 函数，
 * 因此当 消费者(consumer) 组件在其祖先组件退出更新的情况下也能更新。
 * 
 * 通过新旧值检测来确定变化，使用了与 Object.is 相同的算法。
 */

// class.contentType:

class MyClass extends Component {
    static contextType = MyContext
    componentDidMount() {
        let value = this.context
        /* 在组件挂载完成后，使用 MyContext 组件的值来执行一些有副作用的操作 */
    }
    componentDidUpdate() {
        let value = this.context
    }
    componentWillUnmount() {
        let value = this.context
    }
    render() {
        let value = this.context;
        return ({ value })
        /* 基于 MyContext 组件的值进行渲染 */
    }
}
// MyClass.contextType = MyContext
/**
 * 挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext()
 *  创建的 Context 对象。这能让你使用 this.context 来消费最近 Context 上的那个值。
 * 你可以在任何生命周期中访问到它，包括 render 函数中
 */

// Context.Consumer
<MyContext.Consumer>
    {value => value}
    {/* {value =>  基于 context 值进行渲染 } */}
</MyContext.Consumer>

// Context.displayName
MyContext.displayName = 'MyDisplayName' //类型为字符串
// < MyContext.Provider > // "MyDisplayName.Provider" 在 DevTools 中
// <MyContext.Consumer> // "MyDisplayName.Consumer" 在 DevTools 中


/* 动态 Context */

export default class Context extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <App />
            </div>
        )
    }
}