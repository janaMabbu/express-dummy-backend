exports.addRoutes = (app) => {
  const mainRoute = require('./routes/main-route.js')
  const subRoute = require('./routes/sub-route.js')
  // add the different route files
  app.use('/', mainRoute)
  // add the different sub routes files
  app.use('/sub', subRoute)
}
