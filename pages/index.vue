<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <section class="featured-posts">
      <post-preview id="1" title="Preview title" preview-text="PreviewText" :thumbnail="require('~/assets/images/shoe-1.png')" />
      <post-preview id="2" title="Preview title" preview-text="PreviewText" :thumbnail="require('~/assets/images/shoe-2.png')" />
      <post-preview id="3" title="Preview title" preview-text="PreviewText" :thumbnail="require('~/assets/images/shoe-3.png')" />
      <post-preview id="4" title="Preview title" preview-text="PreviewText" :thumbnail="require('~/assets/images/shoe-4.png')" />
      <post-preview id="5" title="Preview title" preview-text="PreviewText" :thumbnail="require('~/assets/images/shoe-5.png')" />
      <post-preview id="6" title="Preview title" preview-text="PreviewText" :thumbnail="require('~/assets/images/shoe-6.png')" />
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-image: url('~assets/images/main-page-background.jpg');
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
