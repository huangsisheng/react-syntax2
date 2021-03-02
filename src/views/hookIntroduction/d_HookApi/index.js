/*
 * @Author: your name
 * @Date: 2021-03-01 17:29:27
 * @LastEditTime: 2021-03-02 16:28:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\views\hookIntroduction\d_HookApi\index.js
 */
import react, {
  Component,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
// https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext

// 1.useState
/* 
与 class 组件中的 setState 方法不同，useState 不会自动合并更新对象。
你可以用函数式的 setState 结合展开运算符来达到合并更新对象的效果。
*/
function Counter1({ initialCount }) {
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

// 2.useReducer: useReducer是useState的一种变体 ，形如redux中的reducer: (state, action) => newState

function init(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init(action.payload);

    default:
      throw new Error();
      break;
  }
}

function Counter2({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      counter:{state.count}
      <button
        onClick={() => dispatch({ type: "reset", payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}

// 3.useCallback  返回一个memoization函数
// function doSomething(a, b) {}
// const memoizedCallback = useCallback(() => {
//   doSomething(a, b);
// }, [a, b]);
/* 
把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，
该回调函数仅在某个依赖项改变时才会更新
 */

// 类似于vue中的computed

// 4. useMemo  返回一个 memoized 值。仅会在某个依赖项改变时才重新计算 memoized 值。
// function computeExpensiveValue(a, b) {}
// const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
/* 如果没有提供依赖项数组，useMemo 在每次渲染时都会计算新的值。 */

// 5. useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。
function TextInputWithFocusButton(params) {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  return (
    <>
      <input type="text" ref={inputEl} />
      <button onClick={onButtonClick}>焦点</button>
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
        useState：
        <Counter1 initialCount={0} />
        <br />
        useReducer：
        <Counter2 initialCount={0} />
        <br />
        <TextInputWithFocusButton />
      </>
    );
  }
}
