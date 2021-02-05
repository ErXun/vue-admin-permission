const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  userId: state => state.user.userId,
  routes: state => state.user.routes,
}
export default getters
