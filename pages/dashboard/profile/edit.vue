<template>
  <div>
    <div class="edit-bg-wrapper container">
      &nbsp;
      <div class="d-inline-bloc mt-11vh">
        <div class="text-center">
          <img src="~/assets/images/person-1.png" alt="avatar" width="65" />
          <span class="d-block h4 mb-0 text-green-400 font-weight-bolder">
            Demi
          </span>
          <small class="d-block fw-500 text-muted">Tap to change picture</small>
        </div>
      </div>
      <section class="mt-10vh px-2">
        <material-input-2 type="text" :value="user.name">
          <span class="fw-600">Full name</span>
        </material-input-2>
        <!-- .. -->
        <material-input-2 class="mt-5" type="text" :value="user.username">
          <span class="fw-600">Username</span>
        </material-input-2>
        <!-- .. -->
        <material-input-2 class="mt-5" type="text" :value="user.nok">
          <span class="fw-600">Next of kin</span>
        </material-input-2>
        <!-- .. -->
        <material-input-2 class="mt-5" type="text" :value="user.address">
          <span class="fw-600">Address</span>
        </material-input-2>
        <!-- .. -->
        <material-input-2 class="mt-5" type="text" :value="user.doctor">
          <span class="fw-600">Doctor</span>
        </material-input-2>
        <!-- .. -->
        <material-input-2 class="mt-5" type="text" :value="user.blood_group">
          <span class="fw-600">Blood(type / group)</span>
        </material-input-2>
        <!-- .. -->
        <material-input-2 class="mt-5" type="text" :value="user.email">
          <span class="fw-600">Email</span>
        </material-input-2>
        <!-- .. -->
        <b-button
          size="lg"
          class="mt-5 bg-green-custom border-0 text-white rounded-pill w-100"
        >
          Save
        </b-button>
      </section>
      <!-- ... -->
      <div class="mt-20vh">&nbsp;</div>
    </div>
    <bottom-nav />
  </div>
</template>
<script>
export default {
  asyncData() {
    return {
      user: {
        name: 'Sam-alade Oluwademilade joshua',
        email: 'sladesdesk5@gmail.com',
        username: 'Demi',
        dob: '30 / 04 / 2021',
        nok: 'Asaolu Elijah',
        address: 'OAUSTECH, Okitipupa',
        doctor: 'Marvell jay',
        blood_group: 'AA / O -ve',
      },
    }
  },
}
</script>
