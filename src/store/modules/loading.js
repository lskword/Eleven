
const app = {
  state: {
    percentage: 100
  },
  mutations: {
    // 用户标示
    SET_PERCENTAGE: (state, data) => {
        state.percentage = data;
    },
  },
  actions: {
    setPercentage({commit}, data) {
        commit('SET_PERCENTAGE', data);
    },
  }
};

export default app;
