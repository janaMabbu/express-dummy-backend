# @express-dummy-backend

A [Express](https://expressjs.com/) node application to support dummy routes for frontend projects local development.


### Development
Install the dependencies

`npm install`

Start the application

`npm start`

After starting the application you can open the below URL in browser and male sure the App is up and running
http://localhost:3000/get-fruits

Configuring this dummy project to make it work with front-end application.
Add this proxy config to your webpack.config.js

```
devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    hot: true,
    inline: true,
    open: true,
    host: 'localhost',
    port: 1337,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '/api': '' },
        changeOrigin: true,
        xfwd: true
      }
    }
  }
 ```
all the network calls with '/api' key word will be routed to express backend project and you can mock any data for that end-point.

### Usage
For Suppose, your Front-end application is making a network request  for "http://localhost:1337/api/get-fruits", this is been proxied to "http://localhost:3000/get-fruits" which is been served by the @express-dummy-backend
so to be clear any XHR Network call from webpack devserver with key word '/api', "http://localhost:1337/api/some-thing", is been proxied to  "http://localhost:3000/some-thing",
you can set up all the mock-routes for your Front-end application in express-dummy-backend project and serve the requests.
