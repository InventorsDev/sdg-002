<template>
  <div>
    <!-- load navbars -->
    <lazy-new-reminder-modal />
    <lazy-new-contact-modal />
    <!-- /... -->
    <div id="custom-overlay" class="overlay">
      <p class="mt-4 px-4 text-right" @click="closeNav()">
        <IconsCloseGreen />
      </p>
      <div class="overlay-content">
        <div
          class="d-inline-block px-2"
          @click="$bvModal.show('reminder-modal')"
        >
          <IconsNewAlert />
        </div>
        <div
          class="d-inline-block px-2"
          @click="$bvModal.show('contact-modal')"
        >
          <IconsNewContact />
        </div>
      </div>
    </div>
    <!-- .. -->
    <div @click="openNav">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    openNav() {
      document.getElementById('custom-overlay').style.width = '100%'
    },
    closeNav() {
      document.getElementById('custom-overlay').style.width = '0%'
    },
  },
}
</script>
<style scoped>
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: rgba(10, 89, 52, 0.1);
  mix-blend-mode: normal;
  box-shadow: 5px 7px 7px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(5px);

  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  width: 100%;
  text-align: center;
  margin-top: 70vh;
}
</style>
