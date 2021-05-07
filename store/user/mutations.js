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

  UPDATE_PROGRESS(state) {
    state.reminders.forEach((rem) => {
      // let startDate = new Date(rem.created_at),
      //   end = new Date(2021, 6, 1),
      //   today = new Date();

      // var q = Math.abs(today - startDate);
      // var d = Math.abs(end - startDate);
      // let progress = Math.round((q / d) * 100);

      rem.progress = Math.floor(Math.random() * 100);
    });
  },
};
