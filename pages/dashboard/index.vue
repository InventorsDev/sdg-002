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
        <span class="h4 text-green-400 font-weight-bolder d-inline-block ml-3"
          >Hi, Demi</span
        >
      </div>
      <section class="--recent-reminders mt-10vh">
        <h4 class="text-green-400 d-inline-block fw-600">
          Upcoming <br />
          Medication <span class="h5"><BIconChevronRight /></span>
        </h4>
        <span class="d-inline-block float-right mt-3">
          <IconsGreenBell />
        </span>
        <b-row class="mt-4 flex-nowrap overflow-auto">
          <b-col cols="auto">
            <reminder-card
              :noOfTablet="2"
              drugName="Paracetamol"
              :progress="70"
              nextReminder="5min"
            />
          </b-col>
          <b-col cols="auto">
            <reminder-card
              :noOfTablet="2"
              drugName="Paracetamol"
              :progress="45"
              nextReminder="5min"
            />
          </b-col>
          <b-col cols="auto">
            <reminder-card
              :noOfTablet="2"
              drugName="Paracetamol"
              :progress="90"
              nextReminder="5min"
            />
          </b-col>
        </b-row>
      </section>
      <section class="mt-5 mb-5">
        <h4 class="text-green-400 d-inline-block fw-600">
          Later <span class="h5"><BIconChevronRight /></span>
        </h4>
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
    </div>
    <bottom-nav />
  </div>
</template>
<script>
import { BIconChevronRight } from 'bootstrap-vue'
export default {
  components: {
    BIconChevronRight,
  },
  transition: 'fade',
}
</script>
