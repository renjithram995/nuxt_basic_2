export default (context) => { // works on layouts, pages and on config-router for all pages
  if (process.browser) {
    context.store.dispatch('initAuth')
  }
}
