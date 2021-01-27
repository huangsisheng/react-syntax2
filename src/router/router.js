/*
 * @Author: your name
 * @Date: 2021-01-27 23:19:12
 * @LastEditTime: 2021-01-27 23:27:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-syntax2\src\router\router.js
 */

// 导入组件
const files = require.context("../views", true, /[index]\.js$/);
function importAll(r) {
    const reg = /\.\/([a-zA-Z]+)(\/)([a-zA-Z_]+)\/([a-zA-Z]+)\.js$/;
    return r.keys().map((key) => {
        const ele = key.match(reg)
        const obj = {
            moduleName: ele[1],
            pageName: ele[3].slice(2),
            component: files(key).default
        }
        return obj
    })
}
export const routes = importAll(files)
console.log(routes);

export const linkList = [
    {
        title: '高级指引',
        id:'1',
        children: [
            {
                path: '/Accessbility',
                name: '无障碍'
            },
            {
                path: '/CodeSplit',
                name: '代码分割'
            },
            {
                path: '/Context',
                name: 'Context'
            },
        ]
    }
]

