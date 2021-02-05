const Mock = require('mockjs')

const users = [
  {
    id: 1,
    username: 'liming',
    password: '123456',
    token: 'abcde2',
    routes: [{
      id: 1,
      authName: '一级菜单',
      icon: 'icon-menu',
      children: [{
        id: 11,
        authName: '一级项目1',
        path: '/',
        rights: ['view', 'edit', 'add', 'delete']
      }, {
        id: 11,
        authName: '一级项目2',
        path: '/',
        rights: ['view']
      }]
    }]
  },
  {
    id: 2,
    username: 'admin',
    password: '123456',
    token: 'mnopqrs1',
    routes: [{
      id: 1,
      authName: '一级菜单',
      icon: 'icon-menu',
      children: [{
        id: 11,
        authName: '一级项目1',
        path: '/',
        rights: ['view', 'edit', 'add', 'delete']
      }, {
        id: 11,
        authName: '一级项目2',
        path: '/',
        rights: ['view', 'edit', 'add', 'delete']
      }]
    }, {
      id: 2,
      authName: '二级菜单',
      icon: 'icon-menu',
      children: [{
        id: 22,
        authName: '二级项目1',
        path: '/',
        rights: ['view', 'edit', 'add', 'delete']
      }]
    }]
  }
]

// 用户登录
Mock.mock('/login', 'post', options => {

  const { username, password } = JSON.parse(options.body)
  const user = users.find(item => {
    return item.username === username && item.password === password
  })
  return user
})

// 用户退出
Mock.mock('/logout', 'delete', () => {
  return {
    code: 200,
    data: 'success'
  }
})


// 获取列表
// 对于带参数的 get 请求，需要正则进行匹配
Mock.mock(RegExp('/getUserInfo' + '.*'), 'get', () => {
  return {
    data: {
      name: 'admin',
      userId: 2,
      routes: users[0].routes
    }
  }
})

