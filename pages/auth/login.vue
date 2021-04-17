<template>
  <div class="bg-custom">
    &nbsp;
    <b-container>
      <!-- Glassmorphism -->
      <div class="glass mt-20vh mb-5">
        <h1 class="font-weight-bold">
          Hi,
          <br />
          <span class="text-lemon-100">welcome</span>
        </h1>
        <b-form class="mt-5" @submit.prevent="login">
          <b-form-group>
            <material-input-1 type="email" v-model="user.email">
              <span class="text-white text-uppercase">Email Address</span>
            </material-input-1>
          </b-form-group>
          <b-form-group class="mt-5">
            <material-input-1 type="password" v-model="user.password">
              <span class="text-white text-uppercase">Password</span>
            </material-input-1>
          </b-form-group>

          <div class="text-right">
            <a class="text-light"><small>FORGOT PASSWORD?</small></a>
          </div>
          <div class="text-center mt-5 mb-5">
            <b-button
              type="submit"
              size="lg"
              class="bg-green-gradient border-0 text-white rounded-pill w-100"
            >
              LOGIN
            </b-button>
            <b-link
              to="/auth/signup"
              class="mt-3 text-white mt-2 d-inline-block"
            >
              SIGN UP
            </b-link>
          </div>
        </b-form>
      </div>
    </b-container>
  </div>
</template>
<script>
export default {
  layout: 'no-auth',
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
    }
  },
  methods: {
    async login() {
      this.$nuxt.$loading.start()
      await this.$axios
        .$post('/auth/login', this.user)
        .then((res) => {
          this.$nuxt.$loading.finish()
          console.log(res)
          if (res.token) {
            localStorage.user_token = res.token
            this.$router.push('/')
          } else {
            // ...
          }
        })
        .catch((err) => {
          let errors = err.response.data.errors
          let fError = errors[Object.keys(errors)[0]][0]
          this.$bvToast.toast(fError, {
            title: 'Registeration Error!',
            toaster: 'b-toaster-bottom-center',
            solid: true,
            variant: 'danger',
            appendToast: true,
          })
        })
    },
  },
}
</script>
