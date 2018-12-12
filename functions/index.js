const functions = require('firebase-functions')
const admin = require('firebase-admin');
const express = require('express')
const { Nuxt } = require('nuxt')

const app = express()

const config = {
  dev: false,
  buildDir: 'nuxt',
  build: {
    publicPath: '/assets/'
  }
}
const nuxt = new Nuxt(config)

function handleRequest(req, res) {
  res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
  nuxt.renderRoute('/').then(result => {
    res.send(result.html)
  }).catch(e => {
    res.send(e)
  })
}
app.get('*', handleRequest)
exports.nuxtApp = functions.https.onRequest(app)

exports.saveUserToDB = functions.auth.user().onCreate((user) => {
  // admin.database
});
