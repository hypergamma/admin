const routes = {
  routes: [
    { name: 'inbox',         path: '/inbox' },
    { name: 'inbox.message', path: '/message/:id' },
    { name: 'compose',       path: '/compose' },
    { name: 'contacts',      path: '/contacts' }
  ],
  defaultRoute: 'inbox'
};

export default routes