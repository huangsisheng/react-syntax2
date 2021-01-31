/*
 * @Author: your name
 * @Date: 2021-01-27 13:16:16
 * @LastEditTime: 2021-01-31 16:39:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\router\index.js
 */
import { Component } from "react";

import { Router, Route, NavLink } from "react-router-dom";
import { createHashHistory } from "history";

import { linkList, routes } from './router'

function ModuleItems(props) {
    return (
        <section>
            <h4 className="module-title">{props.item.title}<span className="arrow"></span></h4>
            <ul className="moudule-wrap">
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
    render() {
        return (
            <Router history={createHashHistory()}>
                <div className="mainDiv">
                    <div className="leftNav">
                        <h3 className="page-title">react学习</h3>
                        {
                            linkList.map(item =>
                                <ModuleItems item={item} key={item.id}/>
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
