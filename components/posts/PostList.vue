<template>
  <section class="featured-posts">
    <post-preview id="1" :is-admin="isAdmin" title="Preview title" preview-text="PreviewText" :thumbnail="require('~/assets/images/shoe-1.png')" />
    <post-preview id="2" :is-admin="isAdmin" title="Preview title" preview-text="PreviewText" :thumbnail="require('~/assets/images/shoe-2.png')" />
    <post-preview id="3" :is-admin="isAdmin" title="Preview title" preview-text="PreviewText" :thumbnail="require('~/assets/images/shoe-3.png')" />
    <post-preview id="4" :is-admin="isAdmin" title="Preview title" preview-text="PreviewText" :thumbnail="require('~/assets/images/shoe-4.png')" />
    <post-preview id="5" :is-admin="isAdmin" title="Preview title" preview-text="PreviewText" :thumbnail="require('~/assets/images/shoe-5.png')" />
    <post-preview id="6" :is-admin="isAdmin" title="Preview title" preview-text="PreviewText" :thumbnail="require('~/assets/images/shoe-6.png')" />
  </section>
</template>

<script>
export default {
  props: {
    isAdmin: {
      type: Boolean,
      default: false
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
