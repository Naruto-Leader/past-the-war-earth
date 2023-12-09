import express from 'express'


const app = express()
app.use(require('request-ip').mw())

const maxAgePeriod = 1000 * 60 * 60 * 24 * 7
app.use(express.static('public', {
  maxAge: maxAgePeriod
}))

module.exports = app;
