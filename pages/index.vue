<template>
  <div>
    <div class="container px-4">
      <div class="mt-4">
        <img
          src="~/assets/images/avatar-sm.png"
          class="img-auto"
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
          Medication <span class="h5"><BIconChevronRight /></span>
        </h5>
        <span class="d-inline-block float-right mt-3">
          <IconsGreenBell />
        </span>
        <b-row class="mt-4 flex-nowrap overflow-auto">
          <b-col
            cols="auto px-2"
            v-for="(reminder, index) in reminders"
            :key="index"
          >
            <reminder-card
              :noOfTablet="reminder.noOfTablet"
              :drugName="reminder.drugName"
              :progress="reminder.progress"
              :nextReminder="reminder.nextReminder"
            />
          </b-col>
        </b-row>
      </section>
      <section class="mt-5 mb-5">
        <h6 class="section-title text-green-400 d-inline-block fw-600">
          Later <span class="h5"><BIconChevronRight /></span>
        </h6>
        <b-row class="mt-3 justify-content-center">
          <b-col>
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
        </b-row>
      </section>
      <div class="mt-10vh">&nbsp;</div>
    </div>
    <bottom-nav />
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { BIconChevronRight } from 'bootstrap-vue';
export default {
  components: {
    BIconChevronRight,
  },
  transition: 'fade',
  data() {
    return {
      reminders: [
        {
          noOfTablet: 2,
          drugName: 'Paracetamol',
          progress: 70,
          nextReminder: '5min',
        },
        {
          noOfTablet: 1,
          drugName: 'Septrin',
          progress: 40,
          nextReminder: '2 hours',
        },
        {
          noOfTablet: 3,
          drugName: 'Combatrin',
          progress: 90,
          nextReminder: '1 day',
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      authenticated: 'user/authenticated',
      userDetails: 'user/userDetails',
    }),
  },
};
</script>
<style scoped>
.section-title {
  font-size: 18px;
}
</style>
