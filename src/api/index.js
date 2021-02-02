// import request from '@/utils/request'
// import Qs from 'qs'

// export default {
//   get(url,params,config={}) {
//     return request({
//       url: url,
//       method: 'get',
//       params,
//       ...config,
//       paramsSerializer(params) {
//         return Qs.stringify(params, {arrayFormat: 'indices'})
//       }
//     })
//   },
  
//   post(url,data,config={}) {
//     return request({
//       url: url,
//       method: 'post',
//       data,
//       ...config
//     })
//   },
  
//   del(url,data,config={}) {
//     return request({
//       url: url,
//       method: 'delete',
//       data,
//       ...config
//     })
//   },
  
//   patch(url,data,config={}) {
//     return request({
//       url: url,
//       method: 'patch',
//       data,
//       ...config
//     })
//   },
  
//   put(url,data,config={}) {
//     return request({
//       url: url,
//       method: 'put',
//       data,
//       ...config
//     })
//   }
// }
