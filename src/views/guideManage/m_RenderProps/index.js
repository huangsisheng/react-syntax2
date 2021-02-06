/*
 * @Author: your name
 * @Date: 2021-02-02 21:30:41
 * @LastEditTime: 2021-02-06 09:54:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\views\guideManage\m_RenderProps\index.js
 */
import React, { Component, Fragment } from "react";
/* 
  Render Props 
  术语 “render prop” 是指一种在 React 组件之间使用一个值为函数的 prop 共享代码的简单技术
 */

class Cat extends React.Component {
    render() {
        const mouse = this.props.mouse;
        return (
            <img src="../../../assets/image/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
        );
    }
}

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = { x: 0, y: 0 };
    }

    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }

    render() {
        return (
            <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
                {/*我们可以在这里换掉 <p> 的 <Cat>   ......
          但是接着我们需要创建一个单独的 <MouseWithSomethingElse>
          每次我们需要使用它时，<Mouse> 是不是真的可以重复使用.*/}
                {
                    this.props.render(this.state)
                }
            </div>
        );
    }
}

class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                <h1>移动鼠标!</h1>
                <Mouse render={mouse => (
                    <Cat mouse={mouse} />
                )} />
            </div>
        );
    }
}
export default class RenderProps extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <MouseTracker />
        )
    }
}