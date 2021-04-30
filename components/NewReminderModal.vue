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
      <b-form class="mt-3" @submit.prevent="createReminder">
        <!-- ... -->
        <!-- select category -->
        <!-- <b-row>
          <b-col cols="md-6 w-50">
            <b-img-lazy
              v-bind="mainProps"
              @click="selectedImage = 'bandage'"
              src="~/assets/images/bandage.png"
              class="img-fluid"
              alt="Image 1"
            ></b-img-lazy>
          </b-col>
          <b-col cols="md-6 w-50">
            <b-img-lazy
              v-bind="mainProps"
              @click="selectedImage = 'bandage'"
              src="~/assets/images/tablet.png"
              class="img-fluid"
              alt="Image 1"
            ></b-img-lazy>
          </b-col>
        </b-row> -->
        <hr />
        <!-- .. -->
        <b-form-group class="mt-4">
          <b-input
            placeholder="Drug Name"
            class="px-4 py-4"
            style="border-radius: 30px"
            required
            v-model="reminderDetails.drug_name"
          ></b-input>
        </b-form-group>
        <!-- ... -->
        <div class="mt-5 glass-mini p-4">
          <span>Prescription</span>
          <div class="--wrapper mt-4">
            <div class="overflow-auto bg-green-400 p-3 rounded">
              <label for="sb-inline" class="w-50 mt-2">No of Hours</label>
              <div class="w-50 d-inline-block float-right">
                <b-form-spinbutton
                  class="ml-4"
                  id="sb-inline"
                  v-model="reminderDetails.hours_per_dosage"
                  inline
                ></b-form-spinbutton>
              </div>
            </div>
            <!-- ... -->
            <div class="overflow-auto mt-3 bg-green-400 p-3 rounded">
              <label for="sb-inline" class="w-50 mt-2">No of days</label>
              <div class="w-50 d-inline-block float-right">
                <b-form-spinbutton
                  class="ml-4"
                  id="sb-inline"
                  v-model="reminderDetails.no_of_days"
                  inline
                ></b-form-spinbutton>
              </div>
            </div>
            <!-- ... -->
            <div class="overflow-auto mt-3 bg-green-400 p-3 rounded">
              <label for="sb-inline" class="w-50 mt-2">No of pills</label>
              <div class="w-50 d-inline-block float-right">
                <b-form-spinbutton
                  class="ml-4"
                  id="sb-inline"
                  v-model="reminderDetails.dosage_no"
                  inline
                ></b-form-spinbutton>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-5 px-5">
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
import { mapActions } from 'vuex';
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
      reminderDetails: {
        drug_name: null,
        hours_per_dosage: 6,
        no_of_days: 3,
        dosage_no: 2,
        dosage_started_at: new Date().toISOString(),
      },
    };
  },
  methods: {
    ...mapActions({
      newReminderAction: 'user/newReminder',
    }),
    async createReminder() {
      this.reminderDetails.dosage = this.reminderDetails.dosage_no + ' pills';
      this.$nuxt.$loading.start();
      await this.newReminderAction(this.reminderDetails)
        .then((res) => {
          this.$nuxt.$loading.finish();
          this.$bvToast.toast('New reminder created successfully', {
            title: 'Operation Successful',
            toaster: 'b-toaster-bottom-center',
            solid: true,
            variant: 'success',
            appendToast: true,
          });
        })
        .catch((err) => {
          this.$nuxt.$loading.finish();
          this.$bvToast.toast('Unable to create new reminder, try again', {
            title: 'Operation Failed',
            toaster: 'b-toaster-bottom-center',
            solid: true,
            variant: 'danger',
            appendToast: true,
          });
        });
    },
  },
};
</script>
<style scoped>
.glass-mini {
  background: rgba(196, 196, 196, 0.1);
  mix-blend-mode: normal;
  backdrop-filter: blur(5px);
  border-radius: 30px;
}
</style>
