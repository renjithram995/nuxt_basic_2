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
      },
      upsertPostData (state, postData) {
        const index = state.loadedPosts.findIndex(
          el => el.id === postData.id
        )
        if (index === -1) {
          state.loadedPosts = [...state.loadedPosts, postData]
        } else {
          state.loadedPosts[index] = postData
        }
      }
    },
    actions: {
      nuxtServerInit (vuexContext, context) {
        return axios
          .get(
            'https://nuxt-sample-11-02-default-rtdb.firebaseio.com/posts.json'
          )
          .then((response) => {
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
          })
          .catch((err) => {
            return context.error(new Error(err))
          })
      },
      setPosts (vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
      addPost (vuexContext, data) {
        let postData = {
          ...data,
          updateDate: new Date()
        }
        return axios
          .post(
            'https://nuxt-sample-11-02-default-rtdb.firebaseio.com/posts.json',
            postData
          )
          .then((result) => {
            postData = { ...postData, id: result.data?.name }
            vuexContext.commit('upsertPostData', postData)
          })
          .catch((e) => {
            console.log(e)
          })
      },
      editPost (vuexContext, data) {
        const postData = {
          ...data,
          updateDate: new Date()
        }
        return axios.put('https://nuxt-sample-11-02-default-rtdb.firebaseio.com/posts/' + data.id + '.json', postData).then((result) => {
          vuexContext.commit('upsertPostData', postData)
        }).catch((err) => {
          console.error(err)
        })
      }
    },
    getters: {
      getLoadedPosts (state) {
        return state.loadedPosts
      }
    }
  })
}

export default createStore
