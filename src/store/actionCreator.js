/*
 * @Author: your name
 * @Date: 2021-03-01 22:52:47
 * @LastEditTime: 2021-03-01 22:55:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\store\actionCreator.js
 */
import {
    CHNAGE_INPUT_VALUE,
    ADD_ITEM,
    DELETE_ITEM
} from "./actionTypes"



export const getInputChange = (value) => ({
    type: CHNAGE_INPUT_VALUE,
    value
})
export const getAddChange = () => ({
    type: ADD_ITEM,
})
export const getDeleteChange = (index) => ({
    type: DELETE_ITEM,
    index
}) 