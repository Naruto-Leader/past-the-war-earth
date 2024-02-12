import express from 'express'
import serveIndex from 'serve-index'
const app = express()

const maxAgePeriod = 1000 * 60 * 60 * 24 * 7
app.use(express.static('public', {
  maxAge: maxAgePeriod
}))
app.use('/', serveIndex('public'));

module.exports = app;
