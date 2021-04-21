export const state = () => ({
  token: null,
  userDetails: null,
});

export const getters = {
  authenticated(state) {
    return state.token && state.userDetails;
  },

  userDetails(state) {
    return state.userDetails;
  },
};

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },

  SET_USER(state, data) {
    state.userDetails = data;
  },
};

export const actions = {
  // ..

  async signUp({ dispatch }, credentials) {
    let response = await this.$axios.$post('/auth/register', credentials);
    return dispatch('attempt', response.token);
  },

  async signIn({ dispatch }, credentials) {
    let response = await this.$axios.$post('/auth/login', credentials);
    return dispatch('attempt', response.token);
  },

  async attempt({ commit, state }, token) {
    if (token) {
      commit('SET_TOKEN', token);
    }
    if (!state.token) {
      return;
    }

    try {
      let response = await this.$axios.$get('/auth/user', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });

      localStorage.token = token;

      commit('SET_USER', response.data);
    } catch (e) {
      localStorage.removeItem('token');

      commit('SET_TOKEN', null);
      commit('SET_USER', null);
    }
  },

  logOut: ({ commit }) => {
    return this.$axios.$post('/auth/logout').then(() => {
      commit('SET_TOKEN', null);
      commit('SET_USER', null);
    });
  },
};
