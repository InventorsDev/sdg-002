<template>
  <div>
    <div class="container px-4">
      <div class="mt-4">
        <img
          srcc="~/assets/images/avatar-sm.png"
          :src="userDPUrl"
          class="border rounded-circle"
          alt="avatar"
          width="45"
        />
        <span class="h4 text-green-400 font-weight-bolder d-inline-block ml-3">
          Hi, {{ userDetails.name.split(' ')[0] }}
        </span>
      </div>
      <section class="--recent-reminders mt-10vh">
        <h5 class="section-title text-green-400 d-inline-block fw-600">
          Upcoming <br />
          Medication
          <span class="h5">
            <BIconChevronRight
              @click="scrollTo('right', '.reminders-wrapper', 100)"
            />
          </span>
        </h5>
        <span
          v-if="remindersLoaded && reminders.length > 1"
          class="d-inline-block float-right mt-3"
          @click="$bvModal.show('reminder-modal')"
        >
          <IconsGreenBell />
        </span>
        <template v-if="remindersLoaded && reminders.length > 0">
          <div class="reminders-wrapper">
            <b-row class="mt-4 flex-nowrap overflow-auto">
              <b-col
                cols="auto px-2"
                v-for="(reminder, index) in reminders"
                :key="index"
              >
                <reminder-card
                  :noOfTablet="Number(reminder.dosage.split(' ')[0])"
                  :drugName="reminder.drug_name"
                  :progress="reminder.progress"
                  :nextReminder="toRelativeTime(reminder.dosage_started_at)"
                />
              </b-col>
              <b-col
                v-if="remindersLoaded && reminders.length < 2"
                cols="auto border add-new-card"
                @click="$bvModal.show('reminder-modal')"
              >
                <p class="text-center h3"><BIconClipboardPlus /></p>
                <span class="d-inline-block mt-1">Add new</span>
              </b-col>
            </b-row>
          </div>
        </template>
        <template v-else-if="remindersLoaded && reminders.upcoming.length < 1">
          <div
            class="text-white shadow bg-lemon-400 bg-green-custom mt-3"
            style="padding: 30px 20px; border-radius: 10px"
          >
            <p class="h6">Noting here yet 🧐</p>
          </div>
        </template>
        <template v-else>
          <div>
            <b-card class="mt-3">
              <b-skeleton animation="wave" width="85%"></b-skeleton>
              <b-skeleton animation="wave" width="55%"></b-skeleton>
              <b-skeleton animation="wave" width="70%"></b-skeleton>
            </b-card>
          </div>
        </template>
      </section>
      <!-- ... -->
      <section class="mt-5 mb-5">
        <h6 class="section-title text-green-400 d-inline-block fw-600">
          Later <span class="h5"><BIconChevronRight /></span>
        </h6>
        <template v-if="remindersLoaded">
          <b-row no-gutters class="mt-3 flex-nowrap overflow-auto">
            <b-col cols="auto">
              <div>
                <b-card
                  overlay
                  img-src="~/assets/images/capsule.png"
                  img-alt="Card Image"
                  text-variant="green-400"
                  class="border-0 p-0"
                >
                  <b-card-title class="mt-3 font-weight-bold">
                    Wound Dressing
                  </b-card-title>
                  <b-card-text> Next 2 hours</b-card-text>
                </b-card>
              </div>
            </b-col>
            <!-- ... -->
            <b-col cols="auto">
              <div>
                <b-card
                  overlay
                  img-src="~/assets/images/green-bg.png"
                  img-alt="Card Image"
                  text-variant="white -400"
                  class="border-0 p-0"
                  style="height: 150px"
                >
                  <b-card-title class="mt-3 font-weight-bold">
                    Apply Lotion
                  </b-card-title>
                  <b-card-text> Next 1 hours</b-card-text>
                </b-card>
              </div>
            </b-col>
          </b-row>
        </template>
        <template v-else>
          <b-card class="mt-3">
            <b-skeleton animation="wave" width="85%"></b-skeleton>
            <b-skeleton animation="wave" width="55%"></b-skeleton>
            <b-skeleton animation="wave" width="70%"></b-skeleton>
          </b-card>
        </template>
      </section>
      <!-- ... -->

      <section class="mt-5 mb-5">
        <h6 class="section-title text-green-400 d-inline-block fw-600">
          Categories
        </h6>
        <template v-if="isMounted">
          <b-row class="mt-3 justify-content-center">
            <b-col cols="auto w-50">
              <img src="~/assets/images/cat-tablet.png" class="img-fluid" />
            </b-col>
            <b-col cols="auto w-50">
              <img src="~/assets/images/cat-bandage.png" class="img-fluid" />
            </b-col>
          </b-row>
          <b-row class="d-none mt-2 justify-content-center">
            <b-col cols="auto w-50">
              <img src="~/assets/images/cat-injection.png" class="img-fluid" />
            </b-col>
            <b-col cols="auto w-50" style="margin-top: -8vh">
              <img src="~/assets/images/cat-syrup.png" class="img-fluid" />
            </b-col>
          </b-row>
        </template>
        <template v-else>
          <b-card class="mt-3">
            <b-skeleton animation="wave" width="85%"></b-skeleton>
            <b-skeleton animation="wave" width="55%"></b-skeleton>
            <b-skeleton animation="wave" width="70%"></b-skeleton>
          </b-card>
        </template>
      </section>
      <div class="mt-10vh">&nbsp;</div>
    </div>
    <bottom-nav />
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import { BIconChevronRight, BIconClipboardPlus } from 'bootstrap-vue';
import RelativeTime from '@yaireo/relative-time';
export default {
  components: {
    BIconChevronRight,
    BIconClipboardPlus,
  },
  transition: 'fade',
  data() {
    return {
      remindersLoaded: false,
      isMounted: false,
    };
  },
  computed: {
    ...mapGetters({
      authenticated: 'user/authenticated',
      userDetails: 'user/userDetails',
      reminders: 'user/reminders',
    }),
    userDPUrl() {
      var gravatar = require('gravatar');

      var secureUrl = gravatar.url(
        this.userDetails.email,
        { s: '45', d: 'robohash' },
        true
      );
      return secureUrl;
    },
  },
  methods: {
    ...mapActions({
      scrollToAction: 'app/scrollTo',
      getReminders: 'user/getReminders',
    }),
    scrollTo(position, wrapper, noOfPixel) {
      let options = { position, wrapper, noOfPixel };
      this.scrollToAction(options);
    },
    toRelativeTime(timestamp) {
      const relativeTime = new RelativeTime();
      return relativeTime.from(new Date(timestamp));
    },
  },
  mounted() {
    setTimeout(() => {
      this.isMounted = true;
      this.getReminders()
        .then((res) => {
          this.remindersLoaded = true;
          // after reminders is loaded, send FCM token to BE
          setTimeout(() => {
            this.$store.dispatch('app/sendToken');
          }, 1000);
        })
        .catch((err) => {
          this.remindersLoadedErr = false;
        });
    }, 1000);
  },
};
</script>
<style scoped>
.section-title {
  font-size: 18px;
}
.card-img {
  height: 150px;
}
.add-new-card {
  margin-left: 5vw;
  padding: 50px 30px;
  background: linear-gradient(
    135deg,
    rgba(250, 250, 250, 0.8) 0%,
    rgba(250, 250, 250, 0.2) 100%
  );
  mix-blend-mode: normal;
  box-shadow: 5px 7px 6px rgba(0, 0, 0, 0.02);
  border-radius: 30px;
}
</style>
