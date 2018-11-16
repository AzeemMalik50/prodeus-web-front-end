import { authService }  from '../_services/auth.service';
const apiUrl = '/'
export const categories = {
  namespaced: true,
  state: {
    allCategories: [],
    error: {}
  },
  actions: {
    getCategories({ commit }) {
      authService.get('/categories')
        .then(
          response => commit('getCategoriesSuccess', response.data),
          error => commit('failure', error)
        );
    }
  },
  mutations: {
    getCategoriesSuccess(state, catgs) {
      state.allCategories =  catgs;
    },
    failure(state, error) {
      state.error = { error };
    }
  },
  getters: {
    allCategories: state => state.allCategories
  },
}
