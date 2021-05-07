import { Plugins } from '@capacitor/core';
const { Modals } = Plugins;

// Confirm Dialog 🚨
const showConfirm = async () => {
  let confirmRet = await Modals.confirm({
    title: 'Fall Detected',
    message:
      'A fall was detected from your device.\nKindly confirm that you are okay or MedTime will automatically send a message to your contacts in the next 5 sec.',
    okButtonTitle: "I'm Okay",
    cancelButtonTitle: 'Emergency (SOS)',
  });
  return confirmRet.value;
};

export default ({ store }) => {
  // ..
  const Shake = require('shake.js');
  let myShakeEvent = new Shake({
    threshold: 15,
    timeout: 1000,
  });

  myShakeEvent.start();
  window.addEventListener('shake', shakeEventDidOccur, false);

  function shakeEventDidOccur() {
    showConfirm().then((res) => {
      if (res == true) {
        store.dispatch('user/sendEmergencyMail');
      }
    });
  }
};
