import { createStore } from 'vuex';

export default createStore({
  state: {
    loading: false,
  },
  mutations: {
    setLoading(state, loadingState: boolean) {
      state.loading = loadingState;
    },
  },
  actions: {
    setLoading(context, loadingState) {
      context.commit('setLoading', loadingState);
    },
  },
  modules: {},
});
