<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from '~/components/Admin/AdminPostForm.vue'
export default {
  name: 'AdminPostData',
  components: { AdminPostForm },
  layout: 'admin',
  data () {
    return {
      loadedPost: {
        author: 'renjith',
        title: 'Nuxt basic',
        content: 'Super amazing nuxt',
        thumbnailLink: require('~/assets/images/shoe-2.png')
      }
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
