/*
 * @Author: your name
 * @Date: 2021-02-28 19:14:10
 * @LastEditTime: 2021-03-03 10:28:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\store\index.js
 */
import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk"
import createSagaMiddleware from "redux-saga";
import todoSags from "./sagas";
import reducer from "./reduce";

// redux-thunk:
// const composeEnhancers =
//     typeof window === 'object' &&
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//             // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//         }) : compose;
// const enhancer = composeEnhancers(
//     applyMiddleware(),
//     // other store enhancers if any
// );
// const store = createStore(reducer, enhancer)


// redux-saga:
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
// mount it on the Store
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(reducer, enhancer);
sagaMiddleware.run(todoSags);

// store是唯一的，只有store可以改变自己的内容
// 在store中使用redux中的中间件
// 为了能在谷歌浏览器上去使用devtools调试工具
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
console.log(store);
export default store;
