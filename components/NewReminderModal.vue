<template>
  <div>
    <b-modal
      class="full-screen-modal"
      id="reminder-modal"
      hide-header
      hide-footer
    >
      <p class="text-right px-3" @click="$bvModal.hide('reminder-modal')">
        <IconsClose />
      </p>
      <h5 class="mt-4">Select Category</h5>
      <!-- ... -->
      <b-form class="mt-3">
        <!-- ... -->
        <!-- select category -->
        <div class="text-center">
          <b-img-lazy
            v-bind="mainProps"
            @click="selectedImage = 'bandage'"
            src="~/assets/images/bandage.png"
            alt="Image 1"
          ></b-img-lazy>
          <!-- .. -->
          <b-img-lazy
            v-bind="mainProps"
            @click="selectedImage = 'tablet'"
            src="~/assets/images/tablet.png"
            alt="Image 2"
          ></b-img-lazy>
        </div>
        <hr />
        <!-- .. -->
        <b-form-group class="mt-4">
          <b-textarea
            rows="3"
            class="px-4 py-5"
            placeholder="Memo"
            style="border-radius: 30px"
          >
          </b-textarea>
        </b-form-group>
        <!-- ... -->
        <hr class="mt-4" />
        <!-- ... -->
        <div class="glass-mini p-4">
          <span>Prescription</span>
          <div class="--wrapper mt-4">
            <div class="bg-green-400 p-3 rounded">
              <label for="sb-inline">No of hours</label>
              <b-form-spinbutton
                class="ml-4"
                id="sb-inline"
                v-model="value"
                inline
              ></b-form-spinbutton>
            </div>
            <!-- ... -->
            <div class="mt-3 bg-green-400 p-3 rounded">
              <label for="sb-inline">No of days</label>
              <b-form-spinbutton
                class="ml-4"
                id="sb-inline"
                v-model="value"
                inline
              ></b-form-spinbutton>
            </div>
            <!-- ... -->
            <div class="mt-3 bg-green-400 p-3 rounded">
              <label for="sb-inline">No of pills</label>
              <b-form-spinbutton
                class="ml-4"
                id="sb-inline"
                v-model="value"
                inline
              ></b-form-spinbutton>
            </div>
          </div>
        </div>
        <div class="mt-10vh px-5">
          <div class="d-inline-block">
            <button
              type="button"
              class="h5 text-secondary no-style"
              @click="$bvModal.hide('reminder-modal')"
            >
              Cancel
            </button>
          </div>
          <div class="d-inline-block float-right">
            <button class="h5 text-white no-style">Save</button>
          </div>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedImage: null,
      mainProps: {
        blank: true,
        blankColor: '#bbb',
        width: 150,
        height: 150,
        class: 'mx-2',
      },
      value: 50,
    }
  },
}
</script>
<style scoped>
.glass-mini {
  background: rgba(196, 196, 196, 0.1);
  mix-blend-mode: normal;
  backdrop-filter: blur(5px);
  border-radius: 30px;
}
</style>
