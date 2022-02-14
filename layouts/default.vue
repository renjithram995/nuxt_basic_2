<template>
  <div>
    <the-header @sidenavToggle="displaySideNav = !displaySideNav" />
    <the-sidenav :show="displaySideNav" @close="displaySideNav = false" />
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      displaySideNav: false
    }
  },
  created () {
    this.$store.dispatch('initalizePosts', this.$axios)
  },
  methods: { }
}
</script>
