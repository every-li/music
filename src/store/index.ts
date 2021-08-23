import { createStore } from 'vuex';

export default createStore({
  state: {
    loading: false, //加载状态
    showHeader: true, //显示头部区域
  },
  mutations: {
    setLoading(state, loadingState: boolean) {
      state.loading = loadingState;
    },
    setShowHeader(state, isShow: boolean) {
      state.showHeader = isShow;
    },
  },
  actions: {
    setLoading(context, loadingState) {
      context.commit('setLoading', loadingState);
    },
    setShowHeader(context, isShow) {
      context.commit('setShowHeader', isShow);
    },
  },
  modules: {},
});
