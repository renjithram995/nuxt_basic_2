import { Store } from 'vuex'

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
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
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
            ])
            resolve()
          }, 1000)
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
