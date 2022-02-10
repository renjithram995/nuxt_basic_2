<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  asyncData (context, callback) { // Nuxt will execute this method only in pages component
    // will not get this keyword
    console.log('context')
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data
    setTimeout(() => {
      callback(null, { // pass error as null
        loadedPosts: [
          {
            id: '1',
            title: 'Preview Title',
            previewText: 'Preview Text',
            thumbnail: require('~/assets/images/shoe-1.png')
          },
          {
            id: '2',
            title: 'Preview Title2',
            previewText: 'Lorem asdasdasd',
            thumbnail: require('~/assets/images/shoe-2.png')
          }
        ]
      })
    }, 1500)
  },
  data () {
    return {
      loadedPosts: []
    }
  },
  created () { }
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
  background-image: url("~assets/images/main-page-background.jpg");
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
</style>
