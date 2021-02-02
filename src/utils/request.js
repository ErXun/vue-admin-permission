import axios from 'axios'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error, 'request interceptor') // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    if (response.status > 300) {
      this.$message.warning('error', '请求失败')
      return Promise.reject(new Error('请求失败'))
    } else {
      if (res) {
        return res
      } else {
        return true;
      }
    }
  },
  error => {
    console.log(error.response, 'response')
    // this.$message.warning('error', error.response.data)
    // window.location.href="javascript:history.go(-1)";
    const status = error.response ? error.response.status : null;
    if (status) {
      switch (status) {
        case 401:
          this.$message.warning('warning', '登录过期，即将返回登录页面')
          setTimeout(() => {
            store.dispatch('user/logout').then(() => {
              location.reload()
              // location.replace("/")
            })
          }, 1500)
          break;
        case 500:
          this.$message.warning('warning', "服务器错误，请稍后再试")
          break;
        case 404:
          console.log(error.response.data || status)
          break;
        default:
          let msg = error.response.data;
          if (error.response.config.responseType === 'blob') {
            let reader = new FileReader()
            reader.onload = e => {
              this.$message.warning('warning', e.target.result || status)
            }
            reader.readAsText(msg)
          } else {
            if (error.response.data.constructor === Array && error.response.data.length) {
              msg = error.response.data[0].message
            }
            this.$message.warning('warning', msg || status)
          }
          break;
      }
    }
    return Promise.reject(error)
  }
)

export default service
