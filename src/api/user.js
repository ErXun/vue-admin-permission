import api from './index'

// 登录
export function login(data) {
  return api.post('/login', data)
}

//退出
export function logout() {
  return api.del('/logout')
}

// 获取用户信息
export function getUserInfo(token) {
  return api.get('/getUserInfo', { token })
}



