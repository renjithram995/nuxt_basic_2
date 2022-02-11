<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <admin-post-form @submit="onSubmit" />
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '~/components/Admin/AdminPostForm.vue'
export default {
  name: 'AdminCreatePostForm',
  components: { AdminPostForm },
  layout: 'admin',
  methods: {
    onSubmit (data) {
      const postData = {
        ...data,
        updateDate: new Date()
      }
      axios.post('https://nuxt-sample-11-02-default-rtdb.firebaseio.com/posts.json', postData
      ).then(() => {
        this.$router.push('/admin')
      }).catch(e => console.log(e))
    }
  }
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
