<template>
  <div class="alert-card border p-3 pl-4">
    <radial-progress-bar
      :diameter="100"
      :completed-steps="progress"
      :total-steps="100"
      :strokeWidth="4"
      innerStrokeColor="transparent"
      :innerStrokeWidth="2"
      startColor="var(--green-200)"
      stopColor="var(--green-200)"
    >
      <h5>{{ progress + '%' }}</h5>
    </radial-progress-bar>
    <div class="mt-3">
      <span class="d-block text-muted">{{ noOfTablet + ' Tablets' }}</span>
      <span class="d-block mt-1 fw-500 text-green-200">{{ drugName }}</span>
      <small class="d-block mt-1 text-muted">{{
        'Next ' + nextReminder
      }}</small>
    </div>
  </div>
</template>
<script>
import RadialProgressBar from 'vue-radial-progress'

export default {
  components: {
    RadialProgressBar,
  },
  props: {
    noOfTablet: {
      type: Number,
      required: true,
    },
    drugName: {
      type: String,
      required: true,
    },
    progress: {
      type: Number,
      required: true,
    },
    nextReminder: {
      type: String,
      required: true,
    },
  },
}
</script>
<style scoped>
.alert-card {
  padding-right: 70px !important;
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
