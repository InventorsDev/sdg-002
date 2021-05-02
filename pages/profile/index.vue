<template>
  <div>
    <div class="gray-bg-wrapper container">
      <div class="d-inline-block mt-5">
        <img
          src="~/assets/images/avatar-sm.png"
          class="img-auto"
          alt="avatar"
          width="45"
        />
        <span class="h4 text-green-400 font-weight-bolder d-inline-block ml-3">
          {{ userDetails.name.split(' ')[0] }}
          <b-link to="/profile/edit" class="d-inline-block ml-2"
            ><IconsEdit
          /></b-link>
        </span>
      </div>
      <section class="mt-10vh px-2">
        <material-input-2
          :readonly="true"
          type="text"
          :placeholder="userDetails.name"
        >
          <span class="fw-600">Full name</span>
        </material-input-2>
        <!-- .. -->
        <material-input-2
          class="mt-5"
          :readonly="true"
          type="text"
          :placeholder="userDetails.username || 'Not set'"
        >
          <span class="fw-600">Username</span>
        </material-input-2>
        <!-- .. -->
        <!-- <material-input-2
          class="mt-5"
          :readonly="true"
          type="text"
          :placeholder="userDetails.nok"
        >
          <span class="fw-600">Next of kin</span>
        </material-input-2> -->
        <!-- .. -->
        <material-input-2
          class="mt-5"
          :readonly="true"
          type="text"
          :placeholder="userDetails.address || 'Not set'"
        >
          <span class="fw-600">Address</span>
        </material-input-2>
        <!-- .. -->
        <material-input-2
          class="mt-5"
          :readonly="true"
          type="text"
          :placeholder="userDetails.doctor || 'Not set'"
        >
          <span class="fw-600">Doctor</span>
        </material-input-2>
        <!-- .. -->
        <material-input-2
          class="mt-5"
          :readonly="true"
          type="text"
          :placeholder="userDetails.blood_group || 'Not set'"
        >
          <span class="fw-600">Blood(type / group)</span>
        </material-input-2>
        <!-- .. -->
        <material-input-2
          class="mt-5"
          :readonly="true"
          type="text"
          :placeholder="userDetails.email || 'Not set'"
        >
          <span class="fw-600">Email</span>
        </material-input-2>
      </section>

      <div class="mt-20vh">&nbsp;</div>
    </div>
    <bottom-nav />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      userDetails: 'user/userDetails',
    }),
  },
};
</script>
