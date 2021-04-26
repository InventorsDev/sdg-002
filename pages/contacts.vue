<template>
  <div>
    <div class="gray-bg-wrapper container">
      <h2 class="d-inline-block mt-5 text-green-400 font-weight-bolder">
        Life <br />savers
      </h2>
      <template v-if="favouriteContacts.length > 10">
        <section>
          <h5 class="mt-5 text-green-400 fw-600">Recent</h5>
          <div class="mt-4">
            <!-- .... -->
            <b-row
              class="mt-3"
              v-for="(contact, index) in recentContacts"
              :key="index"
            >
              <b-col cols="auto">
                <b-avatar
                  variant="info"
                  :text="contact.name[0]"
                  size="60px"
                ></b-avatar>
              </b-col>
              <b-col cols="auto pl-0">
                <h6 class="text-green-200 mt-2 mb-0">
                  {{ contact.name }}
                </h6>
                <p class="text-muted">
                  <small>{{ toRelativeTime(contact.created_at) }}</small>
                </p>
              </b-col>
            </b-row>
          </div>
        </section>
        <!-- ... -->
        <section class="mt-5 mb-5">
          <h5 class="text-green-400 d-inline-block fw-600">
            List <span class="h5"><BIconChevronRight /></span>
          </h5>

          <b-row class="mt-4 flex-nowrap overflow-auto">
            <b-col
              cols="auto px-2"
              v-for="(contact, index) in favouriteContacts"
              :key="index"
            >
              <b-avatar class="border-0" size="90px"></b-avatar>
            </b-col>
          </b-row>
        </section>
      </template>
      <template v-else>
        <div class="mt-10vh text-center">
          <img
            src="~/assets/images/empty-contact.png"
            class="img-fluid"
            width="220"
            alt="Empty Illustration"
          />
          <p class="text-muted px-2 mt-4">
            Looks like you've not added any contact - yet.
          </p>
        </div>
      </template>
      <div class="mt-20vh">&nbsp;</div>
    </div>
    <bottom-nav />
  </div>
</template>
<script>
import { BIconChevronRight } from 'bootstrap-vue';
import { mapActions, mapGetters } from 'vuex';
import RelativeTime from '@yaireo/relative-Time';

export default {
  components: {
    BIconChevronRight,
  },
  transition: 'fade',
  asyncData({ store }) {
    return store
      .dispatch('user/getContacts')
      .then((_) => {
        return { fetchError: false };
      })
      .catch((_) => {
        return { fetchError: true };
      });
  },
  computed: {
    ...mapGetters({
      favouriteContacts: 'user/favouriteContacts',
    }),
    recentContacts() {
      return this.favouriteContacts.slice(0, 2);
    },
  },
  methods: {
    toRelativeTime(timestamp) {
      const relativeTime = new RelativeTime();
      return relativeTime.from(new Date(timestamp));
    },
  },
};
</script>
