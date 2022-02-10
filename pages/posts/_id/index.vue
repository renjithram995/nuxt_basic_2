<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">
        {{ loadedPosts.title }}
      </h1>
      <div class="post-details">
        <div>{{ loadedPosts.updateDate }}</div>
        <div>{{ loadedPosts.author }}</div>
      </div>
      <p>{{ loadedPosts.content }}</p>
    </section>
    <section class="post-feedback">
      <p>
        <span>Let me know what you think about the post. send a mail to</span>
        <a href="mailto:rrenjth1995@gmail.com">rrenjith1995@gmail.com</a>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PostSpecific',
  asyncData (context, callBack) {// Nuxt will execute this method only in pages component
    // will not get this keyword
    // loadedpost will get created by the callback object parameter
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data
    setTimeout(() => {
      callBack(null, {
        loadedPosts:
          {
            id: '1',
            title: 'First post (Id: ' + context.params.id + ')',
            previewText: 'Preview Text',
            author: 'Renjith ram',
            updateDate: new Date().toISOString(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero vero rem aut! Aliq',
            thumbnail: require('~/assets/images/shoe-1.png')
          }

      })
    }, 1500)
  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
