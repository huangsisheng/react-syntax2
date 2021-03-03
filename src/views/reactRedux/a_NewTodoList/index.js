/*
 * @Author: your name
 * @Date: 2021-03-03 11:44:40
 * @LastEditTime: 2021-03-03 15:13:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\views\react-redux\a_NewTodoList\index.js
 */
import { Component, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import {
  getInputChange,
  getAddChange,
  getDeleteChange,
  initActionList,
} from "@/react-redux-store/actionCreator";
const TodoListUI = (props) => {
  const {
    handleInputChange,
    handleAddItem,
    handleDeleteItem,
    inputVal,
    list,
  } = props;
  return (
    <>
      <div>
        <input type="text" value={inputVal} onChange={handleInputChange} />
        <button onClick={handleAddItem}>提交</button>
      </div>
      <ul>
        {list.map((item, index) => (
          <li
            onClick={() => {
              handleDeleteItem(index);
            }}
            key={item + index}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

const TodoList = (props) => {
  useEffect(() => {
    // props.handleGetInitList();
  });

  return (
    <TodoListUI
      handleInputChange={props.handleInputChange}
      handleAddItem={props.handleAddItem}
      handleDeleteItem={props.handleDeleteItem}
      inputVal={props.inputVal}
      list={props.list}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    inputVal: state.inputVal,
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChange(e) {
      const action = getInputChange(e.target.value);
      // 派发action给reducer
      dispatch(action);
    },
    handleAddItem() {
      const action = getAddChange();
      dispatch(action);
    },
    handleDeleteItem(index) {
      const action = getDeleteChange(index);
      dispatch(action);
    },
    handleGetInitList() {
      axios
        .get("https://api.apiopen.top/getJoke?page=1&count=2&type=video")
        .then((res) => {
          const { result } = res.data;
          const data = result.map((item) => item.name);
          const action = initActionList(data);
          dispatch(action);
        });
    },
  };
};
// connect(mapStateToProps, mapDispatchToProps)(TodoList): 将store 与TodoList组件做连接
// 规则：把store映射 为mapStateToProps函数的state参数,而mapStateToProps函数返回的对象就作为 TodoList组件的props
// 把 dispatch映射 为 mapDispatchToProps函数的dispatch参数,合并到组件的怕props
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
// 执行返回的结果是一个容器组件，实际上就是把TodoList 与有些逻辑进行处理生产容器组件并返回
