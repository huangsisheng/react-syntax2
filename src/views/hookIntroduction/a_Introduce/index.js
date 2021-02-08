/*
 * @Author: your name
 * @Date: 2021-02-08 11:16:50
 * @LastEditTime: 2021-02-08 14:14:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\views\hookIntroduction\a_Introduce\index.js
 */

import React, { Component, useEffect, useState } from "react";

/**
 * Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。
 *
 */

function Example(props) {
  // 声明一个新的叫做‘count’的 state 变量
  // 类似与vue3.0的 const count = ref(0)
  const [count, setCount] = useState(0);

  //useEffect 副作用函数 相当于 componentDidMount 和 componentDidUpdate:
  /* 
  当你调用 useEffect 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数。
  由于副作用函数是在组件内声明的，所以它们可以访问到组件的 props 和 state。默认情况下，
  React 会在每次渲染后调用副作用函数,包括第一次渲染的时候。
  */
  useEffect(() => {
    document.title = `点击${count}次`;
  });

  return (
    <div>
      <span>你点击 {count} 次</span>
      <button onClick={() => setCount(count + 1)}>点我</button>
    </div>
  );
}

// 副作用函数还可以通过返回一个函数来指定如何“清除”副作用
// function FriendStatus(props) {
//     const [isOnline,setIsOnline] = useState(null)

//     function handleStatusChange(states){
//         setIsOnline(states.isOnline)
//     }
//     useEffect(() => {
//         ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//         return () => {
//           ChatAPI.unsubscribeFromFriendStatus(
//             props.friend.id,
//             handleStatusChange
//           );
//         };
//     })
//     if(isOnline === null){
//         return '...loading'
//     }
//     return isOnline ? 'online' : 'offline'
// }

/* 
Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则：

只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。
（还有一个地方可以调用 Hook —— 就是自定义的 Hook 中，我们稍后会学习到。）
*/

/* 自定义HOOK，定义 Hook 更像是一种约定而不是功能。如果函数的名字以 “use” 开头并调用其他 Hook，
我们就说这是一个自定义 Hook。 useSomething 的命名约定可以让我们的 linter 插件在使用 Hook 的代码中找到 bug。 */

// 自定义一个loading 等待的Hook
// function useLoading(loadingStatus) {
//   const [isLoading, setIsLoading] = useState(null);

//   function handleLoadingChange(status) {
//     setIsLoading(status.isLoading);
//   }

//   useEffect(() => {
//     return handleLoadingChange;
//   });

//   return isLoading;
// }

// function Loading(props) {
//   const status = useLoading(props.status);
//   return status ? <span>loading...</span> : <span>end...</span>;
// }

export default class HookIntroduce extends Component {
  render() {
    return (
      <div>
        <h2>"hook简介"</h2>
        <Example />
        {/* <Loading status={true} /> */}
        {/* <FriendStatus friend={{id:1}}/> */}
      </div>
    );
  }
}
