import { Store } from 'vuex'

const createStore = () => {
  return new Store({
    state: {
      loadedPosts: [],
      authToken: ''
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
      },
      setToken (state, token) {
        state.authToken = token
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
        const auth = '?auth=' + vuexContext.state.authToken
        return this.$axios
          .$post(
            process.env.baseURL + '/posts.json' + auth,
            postData
          )
          .then((data) => {
            postData = { ...postData, id: data?.name }
            vuexContext.commit('upsertPostData', postData)
          })
          .catch((e) => {
            console.error(e)
            throw e
          })
      },
      editPost (vuexContext, data) {
        const postData = {
          ...data,
          updateDate: new Date().toISOString()
        }
        const auth = '?auth=' + vuexContext.state.authToken
        return this.$axios.put(process.env.baseURL + '/posts/' + data.id + '.json' + auth, postData).then(() => {
          vuexContext.commit('upsertPostData', postData)
        }).catch((err) => {
          console.error(err)
          throw err
        })
      },
      authenticateUser (vuexContext, authData) {
        const authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:' + (authData.isLogin ? 'signInWithPassword' : 'signUp') + '?key=' + process.env.fbApiKey
        const userData = {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
        return this.$axios.$post(authUrl, userData).then((result) => {
          vuexContext.commit('setToken', result.idToken)
          localStorage.setItem('token', result.idToken)
          const tokenExpiresIn = (new Date().getTime() + result.expiresIn * 1000)
          localStorage.setItem('tokenExpiration', tokenExpiresIn)
          vuexContext.dispatch('setLogoutTimer', result.expiresIn * 1000)
        }).catch((err) => {
          console.log(err)
        })
      },
      setLogoutTimer (vuexContext, duration) {
        setTimeout(() => {
          vuexContext.commit('setToken', '')
        }, duration)
      },
      initAuth (vuexContext) {
        const token = localStorage.getItem('token')
        const tokenExpiresIn = Number(localStorage.getItem('tokenExpiration'))
        if (!token || new Date() > tokenExpiresIn) {
          return
        }
        vuexContext.commit('setToken', token)
        vuexContext.dispatch('setLogoutTimer', tokenExpiresIn - new Date().getTime())
      }
    },
    getters: {
      getLoadedPosts (state) {
        return state.loadedPosts
      },
      isAuthenticated (state) {
        return Boolean(state.authToken)
      }
    }
  })
}

export default createStore
