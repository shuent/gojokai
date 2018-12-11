const pkg = require('./package')
const webpack = require('webpack')

module.exports = {
  mode: 'universal',
  srcDir: "src/",
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  router: {
    middleware: 'authenticated'
  },
  /*
  ** Build configuration
  */

  buildDir: './functions/nuxt',
  build: {
    publicPath: '/assets/',
    extractCSS: true,
    extend (config, { isDev, isClient }) {
    // ...
      config.plugins.push(
        new webpack.EnvironmentPlugin([
          'APIKEY',
          'AUTHDOMAIN',
          'DATABASEURL',
          'PROJECTID',
          'STORAGEBUCKET',
          'MESSAGINGSENDERID'
        ])
      )
    }
  }
}
