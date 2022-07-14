import Mock from 'mockjs';
import userList from './userList'
//Mock.mock(url,post/get,返回的数据)   https://www.jb51.net/article/243418.htm   https://blog.csdn.net/iufesjgc/article/details/108665553

// 设置拦截ajax请求的响应时间
Mock.setup({
    timeout: 500,
})


// Mock.mock('/mock/user', 'get', userList)
Mock.mock('/mock/user', 'post', req => {
    let { username, password } = JSON.parse(req.body)
    let res = userList.filter(user => {
        if (username == user.username && password == user.password) {
            return true
        }
    })
    if (res.length !== 0) {
        return {
            code: 200,
            message: 'OK',
            userinfo: res[0]
        }
    } else {
        return {
            code: 404,
            message: 'error',
        }
    }
})