<template>
  <div class="bg-custom">
    &nbsp;
    <b-container>
      <!-- Glassmorphism -->
      <div class="glass mt-20vh mb-5">
        <h1 class="font-weight-bold">
          Please
          <br />
          <span class="text-lemon-100">Sign Up</span>
        </h1>
        <!-- .. -->
        <b-form class="mt-5" @submit.prevent="submitForm">
          <b-form-group>
            <material-input-1 type="text" v-model="user.name">
              <span class="text-white text-uppercase">Full name</span>
            </material-input-1>
          </b-form-group>
          <!-- .. -->
          <b-form-group class="mt-4 py-2">
            <material-input-1 type="email" v-model="user.email">
              <span class="text-white text-uppercase">Email</span>
            </material-input-1>
          </b-form-group>
          <!-- .. -->
          <b-form-group class="mt-4 py-2">
            <material-input-1 type="password" v-model="user.password">
              <span class="text-white text-uppercase">Password</span>
            </material-input-1>
          </b-form-group>
          <!-- .. -->
          <div class="text-center mt-5 mb-5">
            <b-button
              type="submit"
              size="lg"
              class="bg-green-gradient border-0 text-white rounded-pill w-100"
            >
              SIGN UP
            </b-button>
            <b-link
              to="/auth/login"
              class="mt-3 text-white mt-2 d-inline-block"
            >
              LOGIN
            </b-link>
          </div>
        </b-form>
      </div>
    </b-container>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  layout: 'no-auth',
  data() {
    return {
      user: {
        name: null,
        email: null,
        password: null,
      },
    };
  },
  methods: {
    submitForm() {
      const self = this;
      if (this.user.password.length < 7) {
        this.$bvToast.toast('Password must be greater than 6 characters', {
          title: 'Registeration Error!',
          toaster: 'b-toaster-bottom-center',
          solid: true,
          variant: 'danger',
          appendToast: true,
        });
      } else {
        this.signUp(self.user)
          .then(() => {
            this.$nuxt.$loading.finish();
            this.$router.push('/');
          })
          .catch((err) => {
            if (err.response !== undefined && err.response.status === 422) {
              let errors = err.response.data.errors;
              let fError = errors[Object.keys(errors)[0]][0];
              this.$bvToast.toast(fError, {
                title: 'Registration Error!',
                toaster: 'b-toaster-bottom-center',
                solid: true,
                variant: 'danger',
                appendToast: true,
              });
            } else {
              this.$bvToast.toast('Unable to login, try again', {
                title: 'Registration Error!',
                toaster: 'b-toaster-bottom-center',
                solid: true,
                variant: 'danger',
                appendToast: true,
              });
            }
          });
      }
    },
    ...mapActions({
      signUp: 'user/signUp',
    }),
  },
};
</script>
