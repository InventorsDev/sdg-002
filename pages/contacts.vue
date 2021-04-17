<template>
  <div>
    <div class="gray-bg-wrapper container">
      <h2 class="d-inline-block mt-5 text-green-400 font-weight-bolder">
        Life <br />savers
      </h2>
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
                <small>{{ contact.created_at }}</small>
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
            v-for="(contact, index) in contacts"
            :key="index"
          >
            <b-avatar class="border-0" size="90px"></b-avatar>
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
  asyncData() {
    return {
      contacts: [
        {
          name: 'Asaolu Elijah',
          email: 'asaolu@mail.com',
          phone_number: '09023782',
          relationship: 'Brother',
          created_at: '2 Days ago',
        },
        {
          name: 'Dev Joshua',
          email: 'josh@mail.com',
          phone_number: '08023782',
          relationship: 'Father',
          created_at: '2 Days ago',
        },
        {
          name: 'Joshua Joshua',
          email: 'josh2@mail.com',
          phone_number: '07023782',
          relationship: 'Uncle',
          created_at: '2 Days ago',
        },
        {
          name: 'Marvel Jay',
          email: 'marv@mail.com',
          phone_number: '07023782',
          relationship: 'Uncle',
          created_at: '2 Days ago',
        },
      ],
    }
  },
  computed: {
    recentContacts() {
      return this.contacts.slice(0, 2)
    },
  },
}
</script>
