export default {
  scrollTo({ _ }, { position, wrapper, noOfPixel }) {
    let content = document.querySelector(wrapper);
    if (position == 'left') {
      content.scrollLeft -= noOfPixel;
    } else {
      content.scrollLeft += noOfPixel;
    }
  },

  sendToken() {
    if (!localStorage.tokenSent) {
      const { Plugins } = require('@capacitor/core');
      const { PushNotifications } = Plugins;

      PushNotifications.addListener('registration', (token) => {
        let response = this.$axios.$get('/user/fcm/token', token.value);
        localStorage.tokenSent = 'yesss!';
        alert('Push registration success, token: ' + token.value);
        return response;
      }).catch((err) => {
        if (err == 'PushNotifications does not have web implementation.') {
          alert(err);
          localStorage.tokenSent = 'yesss!';
        } else {
          console.log('errorrr', err);
        }
      });
    }
  },
};
