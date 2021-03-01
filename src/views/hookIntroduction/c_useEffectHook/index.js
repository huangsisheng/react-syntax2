/*
 * @Author: your name
 * @Date: 2021-02-08 14:51:05
 * @LastEditTime: 2021-03-01 17:00:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\views\hookIntroduction\c_useEffectHook\index.js
 */

import { Component, useEffect, useState } from "react";

// 在 React 组件中有两种常见副作用操作：需要清除的和不需要清除的

/* class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    document.title = `点击了${this.state.count}次`;
  }
  componentDidUpdate() {
    document.title = `点击了${this.state.count}次`;
  }
  render() {
    return (
      <div>
        <span>点击了{this.state.count}次</span>
        <button
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >按钮</button>
      </div>
    );
  }
} */
// 等价 =>

function Example(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `点击了${count}次`;
  });
  return (
    <div>
      <span>点击了{count}次</span>
      <button onClick={() => setCount(count + 1)}>按钮</button>
    </div>
  );
}
/* ****** 需要清除的effect ****** */
/* 
为什么要在 effect 中返回一个函数？ 这是 effect 可选的清除机制。每个 effect 都可以返回一个清除函数。
如此可以将添加和移除订阅的逻辑放在一起。它们都属于 effect 的一部分。
*/
export default class UseEffectHook extends Component {
  render() {
    return (
      <div>
        <Example />
      </div>
    );
  }
}
