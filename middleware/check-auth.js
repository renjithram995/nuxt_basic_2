export default (context) => { // works on layouts, pages and on config-router for all pages
  context.store.dispatch('initAuth', context.req)
}
