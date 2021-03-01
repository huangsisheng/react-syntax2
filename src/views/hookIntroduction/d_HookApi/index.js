/*
 * @Author: your name
 * @Date: 2021-03-01 17:29:27
 * @LastEditTime: 2021-03-01 17:54:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\views\hookIntroduction\d_HookApi\index.js
 */
import react, { Component, useEffect, useState } from "react";
// https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext

// 1.useState
/* 
与 class 组件中的 setState 方法不同，useState 不会自动合并更新对象。
你可以用函数式的 setState 结合展开运算符来达到合并更新对象的效果。
*/
function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  /* const [state, setState] = useState(() => {
    const initialState = someExpensiveComputation(props);
    return initialState;
  }); */

  // 第二个参数，它是 effect 所依赖的值数组
  // 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数
  // componentDidMount
  useEffect(() => {
    console.log(count);
  }, []);

  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </>
  );
}

export default class HookApi extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Counter initialCount={0} />;
      </>
    );
  }
}
