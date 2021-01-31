/*
 * @Author: your name
 * @Date: 2021-01-28 22:35:44
 * @LastEditTime: 2021-01-31 21:26:15
 * @LastEditors: Please set LastEditors
 * @Description: ref转发
 * @FilePath: \react-syntax2\src\views\d_ErrorBorder\index.js
 */
import React, { Component, useRef } from "react";
/**
 * 类似于vue 的ref,访问子组件或者某个DOM元素
 * 
 * Refs 提供了一种方式，允许我们访问 DOM 节点或在 render 方法中创建的 React 元素
 * 
 * Ref 转发是一项将 ref 自动地通过组件传递到其一子组件的技巧
 */

// 1. 创建refs: React.createRef()
/* 
 * 注：
 * a.当 ref 属性用于 HTML 元素时，构造函数中使用 React.createRef() 创建的 ref 接收底层 DOM 元素作为其 current 属性。
 * b.当 ref 属性用于自定义 class 组件时，ref 对象接收组件的挂载实例作为其 current 属性。
 * c.你不能在函数组件上使用 ref 属性，因为他们没有实例;但只要它指向一个 DOM 元素或 class 组件。
 */
/* class MyComponent extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
    }
    render() {
        // 访问refs
        console.log(this.myRef.current)
        return (<div ref={this.myRef}></div>)
    }
}
 */
/* 
React 会在组件挂载时给 current 属性传入 DOM 元素，并在组件卸载时传入 null 值。
ref 会在 componentDidMount 或 componentDidUpdate 生命周期钩子触发前更新。
*/
// class CustomTextInput extends Component {
//     constructor(props) {
//         super(props)
//         // 创建一个ref 来存储textInput的 DOM元素
//         // this.textInput = React.createRef()
//         console.log(props)
//         this.focusInput = this.focusInput.bind(this)
//     }

//     focusInput() {
//         // 直接使用原生 API 使 text 输入框获得焦点
//         // 注意：我们通过 "current" 来访问 DOM 节点
//         // 类似于vue中，$refs[xxx]，访问ref元素的方式
//         console.log(this.textInput)
//         this.textInput.current.focus()
//     }
//     render() {
//         return (
//             <div>
//                 {/* 类似 vue 中，在子组件上或者DOM元素添加 ref */}
//                 <input type="text" ref={this.textInput} />
//                 <input type="button" value="获得焦点" onClick={this.focusInput} />
//             </div>
//         )
//     }
// }

// 
// function CustomTextInput(props) {
//     const textInput = useRef()

//     const handleClick = () => {
//         textInput.current.focus()
//     }

//     return (
//         <div>
//             {/* 类似 vue 中，在子组件上或者DOM元素添加 ref */}
//             <input type="text" ref={textInput} />
//             <input type="button" value="获得焦点" onClick={handleClick} />
//         </div>
//     )

// }

// 回调refs
/* 
不同于传递 createRef() 创建的 ref 属性，你会传递一个函数。这个函数中接受 React 组件实例
或 HTML DOM 元素作为参数，以使它们能在其他地方被存储和访问。 */
// class CustomTextInput extends Component {
//     constructor(props) {
//         super(props)
//         this.textInput = null
//         this.setTextRefInput = element => {
//             this.textInput = element
//         }

//         // 使用原生DOM API使其获得焦点
//         this.focusInput = () => {
//             this.textInput && this.textInput.focus()
//         }
//     }

//     componentDidMount(){
//         this.focusInput()
//     }

//     render(){
//         return (
//             <div>
//                 <input type="text" ref={this.setTextRefInput}/>
//                 <input type="button" value="获得焦点" onClick={this.focusInput}/>
//             </div>
//         )
//     }
// }
function CustomTextInput(props) {
    return (
        <div>
            <input type="text" ref={props.inputRef}/>
        </div>
    )
}

/* 
第二个参数 ref 只在使用 React.forwardRef 定义组件时存在。
常规函数和 class 组件不接收 ref 参数，且 props 中也不存在 ref。
*/

const FancyButton = React.forwardRef((props, ref) => {
    return <button className="FancyButton" ref={ref}>{props.children}</button>
})

const _ref = React.createRef()

export default class RefsCon extends Component {
    constructor(props){
        super(props)
        this.inputElement = null
    }
    componentDidMount(){
        this.inputElement.focus()
    }
    render() {
        return (
            <div>
                {/* <CustomTextInput /> */}
                <CustomTextInput inputRef={el => this.inputElement = el}/>
                <FancyButton ref={_ref}>点我</FancyButton> 
            </div>
        )
    }
}

    
/* 
在上面的例子中，RefsCont 把它的 refs 回调函数当作 inputRef props 传递给了 
CustomTextInput，而且 CustomTextInput 把相同的函数作为特殊的 ref 属性传递给了 <input>。
结果是，在 RefsCont 中的 this.inputElement 会被设置为与 CustomTextInput 中
的 input 元素相对应的 DOM 节点。
*/