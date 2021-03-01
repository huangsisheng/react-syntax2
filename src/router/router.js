/*
 * @Author: your name
 * @Date: 2021-01-27 23:19:12
 * @LastEditTime: 2021-03-01 21:36:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\router\router.js
 */

// 导入组件
const files = require.context("../views", true, /[index]\.js$/);
function importAll(r) {
    const reg = /\.\/([a-zA-Z]+)(\/)([a-zA-Z_]+)\/([a-zA-Z]+)\.js$/;
    return r.keys().map((key) => {
        const ele = key.match(reg);
        const obj = {
            moduleName: ele[1],
            pageName: ele[3].slice(2),
            component: files(key).default,
        };
        return obj;
    });
}
export const routes = importAll(files);
console.log(routes);

export const linkList = [
    {
        title: "高级指引",
        id: "1",
        isOpen: true,
        children: [
            {
                path: "/Accessbility",
                name: "无障碍",
            },
            {
                path: "/CodeSplit",
                name: "代码分割",
            },
            {
                path: "/Context",
                name: "Context",
            },
            {
                path: "/ErrorBorder",
                name: "错误边界",
            },
            {
                path: "/Refs",
                name: "Refs转发",
            },
            {
                path: "/Fragment",
                name: "Fragment",
            },
            {
                path: "/HighComp",
                name: "高阶组件",
            },
            {
                path: "/TeamWorks",
                name: "与第三方库协同",
            },
            {
                path: "/ThoroughJSX",
                name: "深入JSX",
            },
            {
                path: "/Performance",
                name: "性能优化",
            },
            {
                path: "/Portals",
                name: "Portals",
            },
            {
                path: "/Profiler",
                name: "Profiler",
            },
            {
                path: "/RenderProps ",
                name: "RenderProps ",
            },
            {
                path: "/NotContralCom ",
                name: "非受控组件 ",
            },
        ],
    },
    {
        title: "API查阅",
        id: "2",
        isOpen: true,
        children: [
            {
                path: "/React",
                name: "React顶层",
            },
        ],
    },
    {
        title: "Hook介绍",
        id: "3",
        isOpen: true,
        children: [
            {
                path: "/Introduce",
                name: "Hook简介",
            },
            {
                path: "/useStateHook",
                name: "使用State Hook",
            },
            {
                path: "/useEffectHook",
                name: "使用Effect Hook",
            },
            {
                path: "/HookApi",
                name: "HookAPI索引",
            },
        ],
    },
    {
        title: "Redux",
        id: "4",
        isOpen: true,
        children: [
            {
                path: "/actionReducer",
                name: "actionReducer",
            },
        ]
    }
];
