/*
 * @Author: your name
 * @Date: 2021-01-27 13:16:16
 * @LastEditTime: 2021-02-04 22:26:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\router\index.js
 */
import { Component } from "react";

import { Router, Route, NavLink } from "react-router-dom";
import { createHashHistory } from "history";

import { linkList, routes } from './router'

function ModuleItems(props) {
    function handleClick() {
        props.toggle()
    }
    return (
        <section>
            <h4 className="module-title" onClick={handleClick}>{props.item.title}<span className="arrow"
                style={props.item.isOpen ? { transform: `rotate(135deg)` } : { transform: `rotate(315deg)` }}></span></h4>
            <ul className="moudule-wrap" style={props.item.isOpen ? { height: 'auto' } : { height: '0px' }}>
                {
                    props.item.children.map(ele =>
                        <li className="module-item" key={ele.path}>
                            {/* 激活 */}
                            <NavLink activeClassName="activeRoute" to={ele.path}>{ele.name}</NavLink>
                        </li>
                    )
                }
            </ul>
        </section>
    )
}
export default class RouterIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: linkList
        }
        this.handleToggle = this.handleToggle.bind(this)
    }
    handleToggle(idx) {
        this.setState((state, props) => (
            {
                list: state.list.map((item, index) => {
                    if (index == idx) {
                        item.isOpen = !item.isOpen
                    }
                    return item
                })
            }
        ))
    }
    render() {
        return (
            <Router history={createHashHistory()}>
                <div className="mainDiv">
                    <div className="leftNav">
                        <h3 className="page-title">react学习</h3>
                        {
                            this.state.list.map((item, index) =>
                                <ModuleItems item={item} key={item.id} toggle={() => { this.handleToggle(index) }} />
                            )
                        }
                    </div>

                    {/* 右边视图 */}
                    <div className="rightMain">
                        {
                            routes.map(item =>
                                <Route key={item.pageName} path={'/' + item.pageName} exact component={item.component} />
                            )
                        }
                    </div>
                </div>
            </Router>
        );
    }
}
