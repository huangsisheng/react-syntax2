/*
 * @Author: your name
 * @Date: 2021-01-27 13:22:51
 * @LastEditTime: 2021-01-27 22:28:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\views\a_Accessbility\index.js
 */

/**
 * 无障碍: 
 * 总结：
 * 
 */

import { Component, Fragment } from "react";


/* 1.语义化的html S */
// 有时使用jsx会破坏html语义化，这种
// function ListItem({ item }) {
//     return (
//         /* 短语法 */
//         <>
//             <dt>{item.term}</dt>
//             <dd>{item.desc}</dd>
//         </>
//     )
// }

function Glossary(props) {
    /* 和其他的元素一样，你可以把一系列的对象映射到一个 fragment 的数组中 */
    return (
        <dl>
            {
                props.items.map(item => (
                    <Fragment key={item.id}>
                        <dt>{item.term}</dt>
                        <dd>{item.desc}</dd>
                    </Fragment>
                ))
            }
        </dl>
    )
}
/* 1.语义化的html E */

// for 在react中是 htmlFor
{/* <label htmlFor="namedInput">Name:</label>
<input id="namedInput" type="text" name="name"/> */}

export default class Accessbility extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {
                    id: 1,
                    desc: 'aaa',
                    term: 'a1'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <Glossary items={this.state.items}></Glossary>
            </div>
        );
    }
}
