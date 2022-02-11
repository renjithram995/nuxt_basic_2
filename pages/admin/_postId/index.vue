<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPost" @submit="onSubmitEdit" />
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '~/components/Admin/AdminPostForm.vue'
export default {
  name: 'AdminPostData',
  components: { AdminPostForm },
  layout: 'admin',
  asyncData (context, callBack) { // Nuxt will execute this method only in pages component
    // will not get this keyword
    // loadedpost will get created by the callback object parameter
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data
    return axios.get('https://nuxt-sample-11-02-default-rtdb.firebaseio.com/posts/' + context.params.postId + '.json').then((result) => {
      callBack(null, {
        loadedPost: { ...result.data, id: context.params.postId }
      })
    }).catch((err) => {
      context.error(err)
    })
  },
  methods: {
    onSubmitEdit (data) {
      this.$store.dispatch('editPost', data).then((result) => {
        this.$router.push('/admin')
      })
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
