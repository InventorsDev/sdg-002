<template>
  <div>
    <b-modal
      class="full-screen-modal"
      id="contact-modal"
      hide-header
      hide-footer
    >
      <p class="text-right px-3" @click="$bvModal.hide('contact-modal')">
        <IconsClose />
      </p>
      <h3 class="mt-4">New Contact</h3>
      <hr class="pb-3" />
      <!-- ... -->
      <b-form class="mt-3" @submit.prevent="submitForm">
        <!-- ... -->
        <b-form-group>
          <b-input
            class="p-4 rounded-pill"
            autocomplete="nope"
            placeholder="Name"
            v-model="newContactDetails.name"
          ></b-input>
        </b-form-group>
        <!-- ... -->
        <b-form-group class="mt-4">
          <b-input
            class="p-4 rounded-pill"
            autocomplete="nope"
            placeholder="Email"
            v-model="newContactDetails.email"
          ></b-input>
        </b-form-group>
        <!-- ... -->
        <b-form-group class="mt-4">
          <b-input
            class="p-4 rounded-pill"
            autocomplete="nope"
            placeholder="Phone"
            v-model="newContactDetails.phone_number"
          ></b-input>
        </b-form-group>
        <!-- ... -->
        <b-form-group class="mt-4">
          <b-input
            class="p-4 rounded-pill"
            autocomplete="nope"
            placeholder="Relationship"
            v-model="newContactDetails.relationship"
          ></b-input>
        </b-form-group>
        <!-- ... -->
        <div class="mt-10vh px-5">
          <div class="d-inline-block">
            <button
              type="button"
              class="h5 text-secondary no-style"
              @click="$bvModal.hide('contact-modal')"
            >
              Cancel
            </button>
          </div>
          <div class="d-inline-block float-right">
            <button type="submit" class="h5 text-white no-style">Save</button>
          </div>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      newContactDetails: {
        name: null,
        email: null,
        phone_number: null,
        relationship: null,
      },
    };
  },
  methods: {
    ...mapActions({
      newContactAction: 'user/newContact',
    }),
    submitForm() {
      const self = this;
      self
        .newContactAction(this.newContactDetails)
        .then((res) => {
          self.$store.dispatch('user/getContacts');
          self.$bvToast.toast(
            `${self.newContactDetails.name} was added to your favourite contacts successfully 🎉`,
            {
              title: 'New contact added!',
              toaster: 'b-toaster-bottom-center',
              solid: true,
              variant: 'success',
              appendToast: true,
            }
          );
        })
        .catch((err) => {
          this.$nuxt.$loading.finish();
          if (err.response !== undefined && err.response.status === 422) {
            let errors = err.response.data.errors;
            let fError = errors[Object.keys(errors)[0]][0];
            this.$bvToast.toast(fError, {
              title: 'Unable to create add favourite contact!',
              toaster: 'b-toaster-bottom-center',
              solid: true,
              variant: 'danger',
              appendToast: true,
            });
          } else {
            this.$bvToast.toast('Check internet connection and try again', {
              title: 'Unable to create add favourite contact!',
              toaster: 'b-toaster-bottom-center',
              solid: true,
              variant: 'danger',
              appendToast: true,
            });
          }
        });
    },
  },
};
</script>
