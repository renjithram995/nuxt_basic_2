import { Store } from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts (state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit (vuexContext, context) {
        return axios.get('https://nuxt-sample-11-02-default-rtdb.firebaseio.com/posts.json').then((response) => {
          const postArray = []
          for (const key in response.data) {
            postArray.push({
              id: key,
              title: response.data[key].title,
              previewText: response.data[key].previewText,
              thumbnail: response.data[key].thumbnail
            })
          }
          vuexContext.commit('setPosts', postArray)
        }).catch((err) => {
          return context.error(new Error(err))
        })
      },
      setPosts (vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      }
    },
    getters: {
      loadedPosts (state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
