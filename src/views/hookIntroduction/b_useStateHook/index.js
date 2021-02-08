/*
 * @Author: your name
 * @Date: 2021-02-08 14:17:51
 * @LastEditTime: 2021-02-08 14:50:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\views\hookIntroduction\b_useStateHook\index.js
 */

import { Component, useState } from "react";
// https://zh-hans.reactjs.org/docs/hooks-state.html

/* function Example(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <span>点击了{count}次</span>
      <button onClick={() => setCount(count + 1)}>点点</button>
    </div>
  );
} */
// => 等价
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <span>点击了{this.state.count}次</span>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          点点
        </button>
      </div>
    );
  }
}

// 使用多个state变量
function ExampleWithManyStates() {
  // 声明多个 state 变量
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ text: "学习 Hook" }]);

  function handleOrangeClick() {
    // 和 this.setState({ fruit: 'orange' }) 类似
    setFruit("orange");
  }

  return <span onClick={handleOrangeClick}>{fruit}</span>
}

export default class UseStateHook extends Component {
  render() {
    return (
      <div>
        <Example />
        <ExampleWithManyStates />
      </div>
    );
  }
}
