<template>
  <div class="admin-page">
    <section class="new-post">
      <app-button @click="$router.push('/admin/new-post')">
        Create Post
      </app-button>
      <app-button @click="logOut">
        Log out
      </app-button>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList :is-admin="true" :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AdminIndex',
  layout: 'admin',
  middleware: 'auth',
  computed: {
    ...mapState(['loadedPosts'])
  },
  methods: {
    logOut () {
      this.$store.dispatch('logOut')
      this.$router.push('/admin/auth')
    }
  }
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
