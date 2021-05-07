<template>
  <div>
    <!-- <new-reminder-modal /> -->
    <div class="gray-bg-wrapper container">
      <h2 class="d-inline-block mt-5 text-green-400 font-weight-bolder">
        Notifications
      </h2>
      <p class="text-muted fw-500">2 overdue notifications</p>

      <template v-if="reminders.length > 0">
        <!-- ... -->
        <section class="mt-5 mb-5">
          <h5 class="text-green-400 d-inline-block fw-600">Upcoming</h5>
          <!-- .. -->
          <div class="px-3">
            <b-row
              class="mt-4 p-3 bg-light rounded"
              v-for="(reminder, index) in upcomingReminder"
              :key="index"
            >
              <b-col cols="auto pr-0">
                <b-form-checkbox
                  size="lg"
                  disabled
                  :checked="reminder.status == 'pending' ? false : true"
                  @change="markAsComplete(reminder.id)"
                ></b-form-checkbox>
              </b-col>
              <b-col cols="auto">
                <h6 class="text-capitalize text-green-400 mb-0">
                  {{ reminder.drug_name }} -
                  {{ reminder.dosage }}
                </h6>
                <small class="d-inline-block mt-2 text-muted">
                  <!-- ⚠ modify when BE is updated -->
                  To be taken {{ toRelativeTime(reminder.dosage_started_at) }}
                </small>
              </b-col>
            </b-row>
          </div>
          <!-- .. -->
        </section>

        <section>
          <h5 class="mt-5 text-green-400 fw-600">Past</h5>
          <div class="mt-4 px-3" v-if="completedReminder.length > 0">
            <!-- .. -->
            <b-row
              class="mt-4"
              v-for="(reminder, index) in completedReminder"
              :key="index"
            >
              <b-col cols="auto pr-0">
                <b-form-checkbox size="lg" :checked="true"></b-form-checkbox>
              </b-col>
              <b-col cols="auto">
                <h6 class="text-capitalize text-green-400 mb-0">
                  {{ reminder.dosage }} of
                  {{ reminder.drug_name }}
                </h6>
                <small class="text-muted">
                  <!-- ⚠ modify when BE is updated -->
                  Completed {{ toRelativeTime(reminder.dosage_started_at) }}
                </small>
              </b-col>
            </b-row>
          </div>
          <div class="mt-4 px-3" v-else>Nothing here yet</div>
          <hr />
        </section>
        <!-- ... -->
        <section class="mt-5 mb-5">
          <h5 class="text-green-400 d-inline-block fw-600">Daily tips</h5>
          <!-- .. -->
          <div>
            <b-card
              overlay
              img-src="~/assets/images/tip-card.png"
              img-alt="Card Image"
              text-variant="green-400"
              class="border-0 p-auto"
            >
              <h5>
                An apple a day, <br />
                keeps the doctor <br />
                away.
              </h5>
            </b-card>
          </div>
          <!-- .. -->
        </section>
      </template>
      <template v-else>
        <div class="text-center mt-20vh">
          <img
            src="~/assets/images/calender.png"
            class="img-fluid"
            width="150"
            alt=""
          />
          <p class="px-3 text-muted mt-4">
            Opps! you've not created any reminder.
          </p>
          <div class="px-4">
            <b-button
              size="lg"
              class="mt-5 bg-green-custom border-0 text-white rounded-pill w-100"
              to="/"
            >
              Go Home
            </b-button>
          </div>
        </div>
      </template>
      <div class="mt-20vh">&nbsp;</div>
    </div>
    <bottom-nav />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import RelativeTime from '@yaireo/relative-time';
export default {
  transition: 'fade',
  asyncData({ store }) {
    return store
      .dispatch('user/getReminders')
      .then((_) => {
        console.log(_);
        return { fetchError: false };
      })
      .catch((_) => {
        return { fetchError: true };
      });
  },
  computed: {
    ...mapGetters({
      reminders: 'user/reminders',
    }),
    completedReminder() {
      return this.reminders.filter((arr) => {
        return arr.status !== 'pending';
      });
    },
    upcomingReminder() {
      return this.reminders.filter((arr) => {
        return arr.status == 'pending';
      });
    },
  },
  methods: {
    toRelativeTime(timestamp) {
      const relativeTime = new RelativeTime();
      return relativeTime.from(new Date(timestamp));
    },
    async markAsComplete(reminderId) {
      this.$nuxt.$loading.start();
      await this.$axios
        .$post(`/reminders/${reminderId}/mark-as-read`)
        .then((res) => {
          this.$nuxt.$loading.finish();
          this.$bvToast.toast('Reminder marked as complete successfully 🎉', {
            title: 'Operation Successfull',
            toaster: 'b-toaster-bottom-center',
            solid: true,
            variant: 'success',
            appendToast: true,
          });
        })
        .catch((err) => {
          this.$nuxt.$loading.finish();
          this.$bvToast.toast('Unable to mark reminder as complete', {
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
