/*
 * @Author: your name
 * @Date: 2021-02-28 19:14:20
 * @LastEditTime: 2021-03-03 11:05:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\store\reduce.js
 */
import * as TYPES from "./actionTypes"

const defaultState = {
    inputVal: "haha",
    list: [1, 2]
}
// reducer 可以接受state,但绝不能修改state
// reducer必须是一个纯函数,给定固定的输入就必须有是固定的输出， 且不能有任何副作用

export default (state = defaultState, action) => {
    if (action.type === TYPES.CHNAGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputVal = action.value
        return newState
    }
    if (action.type === TYPES.INIT_TODO_LIST) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }

    if (action.type === TYPES.ADD_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputVal)
        newState.inputVal = ""
        return newState
    }

    if (action.type === TYPES.DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
    return state
}