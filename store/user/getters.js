export default {
  authenticated(state) {
    return state.token && state.userDetails;
  },

  userDetails(state) {
    return state.userDetails;
  },

  favouriteContacts(state) {
    return state.favouriteContacts;
  },

  reminders(state) {
    return state.reminders;
  },
};
