export default (context) => { // works on layouts, pages and on config-router for all pages
  if (!context.store.getters.isAuthenticated && context.route.name !== 'admin-auth') {
    context.redirect('/admin/auth')
  } else if (context.store.getters.isAuthenticated && context.route.name === 'admin-auth') {
    context.redirect('/admin/')
  }
}
