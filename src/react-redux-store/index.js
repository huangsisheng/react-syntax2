/*
 * @Author: your name
 * @Date: 2021-03-03 11:44:25
 * @LastEditTime: 2021-03-03 15:05:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\react-redux-store\index.js
 */
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import todoSags from "./sagas";
import reducer from "./reducer";

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

export default store;
