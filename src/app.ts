import express from 'express'
import mime from 'mime-types'
import serveIndex from 'serve-index'
const app = express()

const maxAgePeriod = 1000 * 60 * 60 * 24 * 1
app.use(express.static('public', {
  maxAge: maxAgePeriod,
  setHeaders: (res: any, path: string) => {
    if (mime.lookup(path) === 'video/mp4') {
      res.setHeader('Cache-Control', 'public, max-age=31536000')
    }
  }       
}))
app.use('/', serveIndex('public'));

module.exports = app;
