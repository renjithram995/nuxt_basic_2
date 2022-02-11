import { Store } from 'vuex'

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
        return context.app.$axios
          .$get(
            process.env.baseURL + '/posts.json'
          )
          .then((data) => {
            const postArray = []
            for (const key in data) {
              postArray.push({
                id: key,
                title: data[key].title,
                previewText: data[key].previewText,
                thumbnail: data[key].thumbnail
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
          updateDate: new Date().toISOString()
        }
        return this.$axios
          .$post(
            process.env.baseURL + '/posts.json',
            postData
          )
          .then((data) => {
            postData = { ...postData, id: data?.name }
            vuexContext.commit('upsertPostData', postData)
          })
          .catch((e) => {
            console.error(e)
          })
      },
      editPost (vuexContext, data) {
        const postData = {
          ...data,
          updateDate: new Date().toISOString()
        }
        return this.$axios.put(process.env.baseURL + '/posts/' + data.id + '.json', postData).then(() => {
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
