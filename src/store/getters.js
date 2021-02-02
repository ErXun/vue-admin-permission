const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  routes: state => state.user.routes,
}
export default getters
