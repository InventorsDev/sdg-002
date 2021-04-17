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
        <b-form class="mt-5">
          <b-form-group>
            <material-input-1 type="text">
              <span class="text-white text-uppercase">Full name</span>
            </material-input-1>
          </b-form-group>
          <!-- .. -->
          <b-form-group class="mt-4 py-2">
            <material-input-1 type="email">
              <span class="text-white text-uppercase">Email</span>
            </material-input-1>
          </b-form-group>
          <!-- .. -->
          <b-form-group class="mt-4 py-2">
            <material-input-1 type="password">
              <span class="text-white text-uppercase">Password</span>
            </material-input-1>
          </b-form-group>
          <!-- .. -->
          <div class="text-center mt-5 mb-5">
            <b-button
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
export default {
  layout: 'no-auth',
}
</script>
