<template>
  <div>
    <div class="edit-bg-wrapper container">
      &nbsp;
      <div class="d-inline-bloc mt-11vh">
        <div class="text-center">
          <img
            :src="userDPUrl"
            class="border rounded-circle img-auto"
            alt="avatar"
          />
          <span class="d-block h4 mb-0 text-green-400 font-weight-bolder">
            {{ userDetails.name.split(' ')[0] }}
          </span>
          <small class="d-block fw-500 text-muted">Tap to change picture</small>
        </div>
      </div>
      <form class="mt-10vh px-2" @submit.prevent="updateProfile">
        <material-input-2 type="text" v-model="userDetails.name">
          <span class="fw-600">Full name</span>
        </material-input-2>
        <!-- .. -->
        <material-input-2
          class="mt-5"
          type="text"
          :value="userDetails.username"
          v-model="newDetails.username"
        >
          <span class="fw-600">Username</span>
        </material-input-2>
        <!-- .. -->
        <material-input-2
          class="mt-5"
          type="text"
          :value="userDetails.next_of_kin"
          v-model="newDetails.next_of_kin"
        >
          <span class="fw-600">Next of kin</span>
        </material-input-2>
        <!-- .. -->
        <material-input-2
          class="mt-5"
          type="text"
          :value="userDetails.address"
          v-model="newDetails.address"
        >
          <span class="fw-600">Address</span>
        </material-input-2>
        <!-- .. -->
        <material-input-2
          class="mt-5"
          type="text"
          :value="userDetails.doctor"
          v-model="newDetails.doctor"
        >
          <span class="fw-600">Doctor</span>
        </material-input-2>
        <!-- .. -->
        <material-input-2
          class="mt-5"
          type="text"
          :value="userDetails.blood_group"
          v-model="newDetails.blood_group"
        >
          <span class="fw-600">Blood(type / group)</span>
        </material-input-2>
        <!-- .. -->
        <material-input-2 class="mt-5" type="text" :value="userDetails.email">
          <span class="fw-600">Email</span>
        </material-input-2>
        <!-- .. -->
        <b-button
          type="submit"
          size="lg"
          class="mt-5 bg-green-custom border-0 text-white rounded-pill w-100"
        >
          Save
        </b-button>
      </form>
      <!-- ... -->
      <div class="mt-20vh">&nbsp;</div>
    </div>
    <bottom-nav />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      newDetails: {
        username: null,
        phone_number: null,
        address: null,
        gender: null,
        doctor: null,
        blood_group: null,
        next_of_kin: null,
      },
    };
  },
  computed: {
    ...mapGetters({
      userDetails: 'user/userDetails',
    }),
    userDPUrl() {
      var gravatar = require('gravatar');
      var secureUrl = gravatar.url(
        this.userDetails.email,
        { s: '65', d: 'robohash' },
        true
      );
      return secureUrl;
    },
  },
  methods: {
    ...mapActions({
      updateProfileAction: 'user/updateProfile',
    }),
    updateProfile() {
      this.updateProfileAction(this.newDetails)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    },
  },
};
</script>
