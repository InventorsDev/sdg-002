<template>
  <div>
    <div class="container">
      <h1 class="mt-5 text-green-400 font-weight-bolder">Life <br />savers</h1>
      <section>
        <h5 class="mt-4 text-green-400 fw-600">Recent</h5>
        <div class="mt-5">
          <b-row>
            <b-col cols="auto">
              <b-avatar variant="info" text="A" size="lg"></b-avatar>
            </b-col>
            <b-col cols="auto pl-2">
              <h5 class="text-green-200">Elijah</h5>
              <p class="text-muted">2 days ago</p>
            </b-col>
          </b-row>
          <b-row class="mt-3">
            <b-col cols="auto">
              <b-avatar text="BA" size="lg"></b-avatar>
            </b-col>
            <b-col cols="auto pl-2">
              <h5 class="text-green-200">Elijah</h5>
              <p class="text-muted">2 days ago</p>
            </b-col>
          </b-row>
        </div>
      </section>
      <!-- ... -->
      <section class="mt-5 mb-5">
        <h4 class="text-green-400 d-inline-block fw-600">
          List <span class="h5"><BIconChevronRight /></span>
        </h4>

        <b-row class="mt-4 flex-nowrap overflow-auto">
          <b-col cols="auto">
            <b-avatar
              class="border-0"
              src="~/assets/images/person-1.png"
              size="4em"
            ></b-avatar>
          </b-col>
          <b-col cols="auto">
            <b-avatar class="border-0" variant="success" size="4em"></b-avatar>
          </b-col>
          <b-col cols="auto">
            <b-avatar
              class="border-0"
              src="~/assets/images/person-2.png"
              size="4em"
            ></b-avatar>
          </b-col>
          <b-col cols="auto">
            <b-avatar class="border-0" text="Ae" size="4em"></b-avatar>
          </b-col>
          <b-col cols="auto">
            <b-avatar class="border-0" variant="success" size="4em"></b-avatar>
          </b-col>
          <b-col cols="auto">
            <b-avatar
              class="border-0"
              src="~/assets/images/person-2.png"
              size="4em"
            ></b-avatar>
          </b-col>
        </b-row>
      </section>
      <div class="mt-20vh">&nbsp;</div>
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
