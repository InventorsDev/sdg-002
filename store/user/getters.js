export default {
  authenticated(state) {
    return state.token && state.userDetails;
  },

  userDetails(state) {
    return state.userDetails;
  },
};
