const app = {
  state: {
    token: ''
  },
  mutations: {
    // 用户标示
    SET_TOKEN: (state, data) => {
        state.token = data;
    },
  },
  actions: {
    setToken({commit}, data) {
        commit('SET_TOKEN', data);
    },
  }
};

export default app;
