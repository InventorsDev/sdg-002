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
      <b-form class="mt-3">
        <!-- ... -->
        <b-form-group>
          <b-input
            class="p-4 rounded-pill"
            autocomplete="nope"
            placeholder="Name"
          ></b-input>
        </b-form-group>
        <!-- ... -->
        <b-form-group class="mt-4">
          <b-input
            class="p-4 rounded-pill"
            autocomplete="nope"
            placeholder="Email"
          ></b-input>
        </b-form-group>
        <!-- ... -->
        <b-form-group class="mt-4">
          <b-input
            class="p-4 rounded-pill"
            autocomplete="nope"
            placeholder="Phone"
          ></b-input>
        </b-form-group>
        <!-- ... -->
        <b-form-group class="mt-4">
          <b-input
            class="p-4 rounded-pill"
            autocomplete="nope"
            placeholder="Relationship"
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
            <button class="h5 text-white no-style">Save</button>
          </div>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>
