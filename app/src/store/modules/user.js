const state = () => ({
  addr: localStorage.getItem('metaMaskAddr') || '',

})
const getters = {
  addr: (state) => state.addr,
}

const mutations = {
  setAddr(state, addr) {
    state.addr = addr
    localStorage.setItem('metaMaskAddr',addr)
  }
}
const actions = {
  setLoginData({ commit }, userInfo) {
    const address = userInfo['address']
    if (address) commit('setAddr', address)
  },
}
export default { state, getters, mutations, actions }
