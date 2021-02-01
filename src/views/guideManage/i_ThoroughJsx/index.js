/*
 * @Author: your name
 * @Date: 2021-01-28 22:35:44
 * @LastEditTime: 2021-02-01 22:36:01
 * @LastEditors: Please set LastEditors
 * @Description: Fragment
 * @FilePath: \react-syntax2\src\views\d_ErrorBorder\index.js
 */
import React, { Component, Fragment } from "react";

console.log(React)

/* const Div = <div className="wrap">盒子</div>
=>编译为：
React.createElement(
    'div',
    { className: 'wrap' }
) */
// JSX类型不能是一个表达式：
const PhotoStory = <div>photo</div>
const VideoStory = <div>video</div>
const components = {
    photo: PhotoStory,
    video: VideoStory,
}
function Story(props) {
    // 正确！JSX 类型可以是大写字母开头的变量。
    const SepcificStory = components[props.storyTtpe]
    return <SepcificStory story={props.story} />
}

// JavaScript 表达式作为 Props
// if 语句以及 for 循环不是 JavaScript 表达式，所以不能在 JSX 中直接使用

// 字符串字面量:
// 将字符串字面量赋值给 prop 时，它的值是未转义的
{/* <MyComponent message="&lt;3" />
// 等价 => 
<MyComponent message={'<3'} /> */}

// Props 默认值为 “True”
{/* <MyTextBox autocomplete />
// =>
<MyTextBox autocomplete={true} /> */}

// 属性展开:
const Button = props => {
    const { kind, ...other } = props;
    const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
    return <button className={className} {...other} />;
};

const App = () => {
    return (
        <div>
            <Button kind="primary" onClick={() => console.log("clicked!")}>
                Hello World!
      </Button>
        </div>
    );
};

/* 
JSX 会移除行首尾的空格以及空行。与标签相邻的空行均会被删除，
文本字符串之间的新行会被压缩为一个空格
 */

// 布尔类型、Null 以及 Undefined 将会忽略
// 0仍然会被渲染
export default class ThoroughJSX extends Component {
    constructor(props) {
        super(props)
    }
    // React 组件也能够返回存储在数组中的一组元素：
    render() {
        // 不需要用额外的元素包裹列表元素！
        return [
            // 不要忘记设置 key :)
            <li key="A">First item</li>,
            <li key="B">Second item</li>,
            <li key="C">Third item</li>,
        ];
    }
}