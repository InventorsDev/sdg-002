export default {
  SET_TOKEN(state, token) {
    state.token = token;
  },

  SET_USER(state, data) {
    state.userDetails = data;
  },

  SET_CONTACTS(state, data) {
    state.favouriteContacts = data;
  },

  SET_REMINDERS(state, data) {
    state.reminders = data;
  },
};
