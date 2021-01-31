/*
 * @Author: your name
 * @Date: 2021-01-28 22:35:44
 * @LastEditTime: 2021-01-31 21:57:54
 * @LastEditors: Please set LastEditors
 * @Description: Fragment
 * @FilePath: \react-syntax2\src\views\d_ErrorBorder\index.js
 */
import React, { Component } from "react";

// 1.动机
class Table extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <table>
                <tr>
                    <Columns />
                </tr>
            </table>
        )
    }
}

class Columns extends Component {
    render() {
        return (
            /* <React.Fragment>
                <td>Hi</td>
                <td>Sang</td>
            </React.Fragment> */
            <>
                <td>Hi</td>
                <td>Sang</td>
            </>
        )
    }
}

// key 是唯一可以传递给 Fragment 的属性。未来我们可能会添加对其他属性的支持，例如事件。
class Glossary extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <dl>{
                this.props.items.map(ele =>
                    <React.Fragment key={ele.id}>
                        <dt>{ele.name}</dt>
                        <dd>{ele.desc}</dd>
                    </React.Fragment>
                )
            }</dl>
        )
    }
}


export default class FragmentCon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 'zs',
                    name: '张三',
                    desc: 'CTO'
                },
                {
                    id: 'ls',
                    name: '李四',
                    desc: 'CFO'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <Table></Table>
                <Glossary items={this.state.items}></Glossary>
            </div>
        )
    }
}