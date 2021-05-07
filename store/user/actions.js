export default {
  /* .... */
  async signUp({ dispatch }, credentials) {
    let response = await this.$axios.$post('/auth/register', credentials);
    return dispatch('attempt', response.token);
  },

  async signIn({ dispatch }, credentials) {
    let response = await this.$axios.$post('/auth/login', credentials);
    return dispatch('attempt', response.token);
  },

  logOut: ({ commit }) => {
    return this.$axios.$post('/auth/logout').then(() => {
      commit('SET_TOKEN', null);
      commit('SET_USER', null);
    });
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

  async newContact(_, contactDetails) {
    return await this.$axios.$post('/contacts', contactDetails);
  },

  async getContacts({ commit }) {
    let response = await this.$axios.$get('/contacts');
    commit('SET_CONTACTS', response.data);
    return response;
  },

  async newReminder(_, reminderDetails) {
    return await this.$axios.$post('/medications', reminderDetails);
  },

  async getReminders({ commit }) {
    let response = await this.$axios.$get('/medications');
    commit('SET_REMINDERS', response.data);
    return response;
  },
};
