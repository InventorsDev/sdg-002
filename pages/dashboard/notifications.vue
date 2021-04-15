<template>
  <div>
    <!-- <new-reminder-modal /> -->
    <div class="gray-bg-wrapper container">
      <h2 class="d-inline-block mt-5 text-green-400 font-weight-bolder">
        Notifications
      </h2>
      <p class="text-muted fw-500">2 overdue notifications</p>
      <section>
        <h5 class="mt-5 text-green-400 fw-600">Past</h5>
        <div class="mt-4 px-3">
          <!-- .. -->
          <b-row
            class="mt-4"
            v-for="(reminder, index) in reminders"
            :key="index"
          >
            <b-col cols="auto pr-0">
              <b-form-checkbox size="lg"></b-form-checkbox>
            </b-col>
            <b-col cols="auto">
              <h6 class="text-green-400 mb-0">
                {{ reminder.noOfTablet + ' tablets' }} of
                {{ reminder.drugName }}
              </h6>
              <small class="text-muted">{{ reminder.endDate + ' ago' }}</small>
            </b-col>
          </b-row>
        </div>
      </section>
      <!-- ... -->
      <section class="mt-5 mb-5">
        <h5 class="text-green-400 d-inline-block fw-600">Upcoming</h5>
        <!-- .. -->
        <div class="px-3">
          <b-row
            class="mt-4 p-3 bg-light rounded"
            v-for="(reminder, index) in reminders"
            :key="index"
          >
            <b-col cols="auto pr-0">
              <b-form-checkbox size="lg"></b-form-checkbox>
            </b-col>
            <b-col cols="auto">
              <h6 class="text-green-400 mb-0">
                {{ reminder.drugName }} - {{ reminder.noOfTablet + ' tablets' }}
              </h6>
              <small class="text-muted">{{ reminder.endDate + ' ago' }}</small>
            </b-col>
          </b-row>
        </div>
        <!-- .. -->
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
      <div class="mt-20vh">&nbsp;</div>
    </div>
    <bottom-nav />
  </div>
</template>
<script>
export default {
  transition: 'fade',
  asyncData() {
    return {
      reminders: [
        {
          noOfTablet: 2,
          drugName: 'Panadol',
          endDate: '2 days',
        },
        {
          noOfTablet: 5,
          drugName: 'Codeine',
          endDate: '1 days',
        },
      ],
    }
  },
}
</script>
