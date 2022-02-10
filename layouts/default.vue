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
  methods: { }
}
</script>
