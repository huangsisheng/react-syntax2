/*
 * @Author: your name
 * @Date: 2021-01-27 17:41:24
 * @LastEditTime: 2021-01-27 22:56:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\views\guideManage\b_code\index.js
 */

/**
* 代码分割:
* 总结：
* 优点：减小包的体积，“懒加载”，初始化加载的时候减少所需的代码量
*
*/
import React, { Component, Suspense, lazy } from "react";

/* React.lazy S */

/* 
    a.参见vue异步组件：() => import('./my-async-component')

    b.React.lazy 和 Suspense 技术还不支持服务端渲染。如果你想要在使用服务端渲染的应用中使用，
    我们推荐 Loadable Components 这个库。它有一个很棒的服务端渲染打包指南。

    c.React.lazy 接受一个函数，这个函数需要动态调用 import()。它必须返回一个 Promise，
    该 Promise 需要 resolve 一个 default export 的 React 组件

    d.然后应在 Suspense 组件中渲染 lazy 组件(优雅降级)
 */
const OtherComponent = React.lazy(() => import('./OtherComponent'))

function MyCom() {
    return (
        /* Suspense 可以包裹多个懒加载组件 */
        /* fallback 属性接受任何在组件加载过程中你想展示的 React 元素 */
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <OtherComponent />
            </Suspense>
        </div>
    )
}

/* React.lazy E */



/* 基于路由的代码分割 S */
// 参见 vue的路由懒加载：
// const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* const Home = lazy(() => import('./routes/Home'));
const About = lazy(() => import('./routes/About'));

const App = () => (
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </Suspense>
    </Router>
); */
/* 基于路由的代码分割 E */

export default class CodeSplit extends Component {
    render() {
        return (
            <div>
                <MyCom />
            </div>
        );
    }
}