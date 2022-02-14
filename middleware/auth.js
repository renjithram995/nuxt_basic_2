export default (context) => { // works on layouts, pages and on config-router for all pages
  if (!context.store.getters.isAuthenticated) {
    context.redirect('/admin/auth')
  }
}
