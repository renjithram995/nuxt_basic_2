<template>
  <section class="featured-posts">
    <post-preview
      v-for="post in posts"
      :id="post.id"
      :key="post.id"
      :is-admin="isAdmin"
      :title="post.title"
      :preview-text="post.previewText"
      :thumbnail="post.thumbnail"
    />
    <!-- <post-preview id="1" :is-admin="isAdmin" title="Preview title" preview-text="PreviewText" :thumbnail="require('~/assets/images/shoe-1.png')" /> -->
  </section>
</template>

<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
