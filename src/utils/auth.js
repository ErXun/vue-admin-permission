import Cookies from 'js-cookie'

const TokenKey = 'test-token'

const UserNameKey = 'test-name'

const UserIdKey = 'test-id'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getUserName() {
  return Cookies.get(UserNameKey)
}

export function setUserName(name) {
  return Cookies.set(UserNameKey, name)
}

export function getUserId() {
  return Cookies.get(UserIdKey)
}

export function setUserId(name) {
  return Cookies.set(UserIdKey, name)
}
