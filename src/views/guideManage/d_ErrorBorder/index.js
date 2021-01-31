/*
 * @Author: your name
 * @Date: 2021-01-28 22:35:44
 * @LastEditTime: 2021-01-31 11:48:56
 * @LastEditors: Please set LastEditors
 * @Description: 错误边界
 * @FilePath: \react-syntax2\src\views\d_ErrorBorder\index.js
 */
import React,{ Component } from "react";
import { logErrorToMyService } from "@/utils/captureError";

/**
 * 错误边界无法捕获以下场景：
 * 1、事件处理：事件处理器不会再渲染期间触发；
 * 2、异步代码；
 * 3、服务端渲染；
 * 4、它自身抛出的错误（并非它的子组件）。
 * @param {*}
 * @return {*}
 */
class ErrorBoundary extends Component{
    constructor(props){
        super(props)
        this.state = {hasError:false}
    }
    static getDerivedStateFromError(error) {
        // 更新 state 使下一次渲染能显示降级后的UI
        return {hasError:true}
    }
    componentDidCatch(error,errorInfo){
        // 将错误日志上报服务器
        logErrorToMyService(error, errorInfo);
    }
    render(){
        if(this.state.hasError){
            // 降级后的UI
            return  <h1>一些些错误。。。</h1>
        }
        return this.props.children
    }
}
/* 错误边界放置在哪里？ */
/* 
错误边界的粒度由你来决定，可以将其包装在最顶层的路由组件
并为用户展示一个 “Something went wrong” 的错误信息，
就像服务端框架经常处理崩溃一样。你也可以将单独的部件包装在错误边界以保护应用其他部分不崩溃。
*/
export default class ErrorBorder extends Component{
    render(){
        return(
            <div>
                <ErrorBoundary>
                    <span style={{color:'red'}}>有烟无伤</span>
                </ErrorBoundary>
            </div>
        )
    }
}