"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(require('request-ip').mw());
// var urlencodedParser = bodyParser.urlencoded({ extended: false, parameterLimit: 2 })
// export var all_actions_file = createWriteStream(__dirname + '/../logs/allActions.log', { flags: 'a' });
// var blog_file = createWriteStream(__dirname + '/../logs/blog.log', { flags: 'a' });
// var contact_file = createWriteStream(__dirname + '/../logs/contact.log', { flags: 'a' });
// var github_file = createWriteStream(__dirname + '/../logs/github.log', { flags: 'a' });
// var subscribe_file = createWriteStream(__dirname + '/../logs/subscribe.log', { flags: 'a' });
// var visit_file = createWriteStream(__dirname + '/../logs/visit.log', { flags: 'a' });
/*
app.post('/blog', (_req, _res) => {
  var logEntry = new Date().toISOString() + '\t' + (_req as any).clientIp + '\tBLOG    \n'
  blog_file.write(logEntry)
  all_actions_file.write('BLOG         \t' + logEntry)
  _res.send('operation recorded')

})

app.post('/githubTop', (_req, _res) => {
  var logEntry = new Date().toISOString() + '\t' + (_req as any).clientIp + '\tTOP     \n'
  github_file.write(logEntry)
  all_actions_file.write('GITHUB       \t' + logEntry)
  _res.send('operation recorded')

})

app.post('/githubBottom', (_req, _res) => {
  var logEntry = new Date().toISOString() + '\t' + (_req as any).clientIp + '\tBOTTOM  \n'
  github_file.write(logEntry)
  all_actions_file.write('GITHUB       \t' + logEntry)
  _res.send('operation recorded')

})

app.post('/contact', (_req, _res) => {
  var logEntry = new Date().toISOString() + '\t' + (_req as any).clientIp + '\n'
  contact_file.write(logEntry)
  all_actions_file.write('CONTACT      \t' + logEntry)
  _res.send('operation recorded')

})

app.post('/learnRevenue', (_req, _res) => {
  var logEntry = new Date().toISOString() + '\t' + (_req as any).clientIp + '\tREVENUE \n'
  blog_file.write(logEntry)
  all_actions_file.write('BLOG         \t' + logEntry)
  _res.send('operation recorded')
})

app.post('/learnSecurity', (_req, _res) => {
  var logEntry = new Date().toISOString() + '\t' + (_req as any).clientIp + '\tSECURITY\n'
  blog_file.write(logEntry)
  all_actions_file.write('BLOG         \t' + logEntry)
  _res.send('operation recorded')
})

app.post('/load', (_req, _res) => {
  var logEntry = new Date().toISOString() + '\t' + (_req as any).clientIp + '\n'
  visit_file.write(logEntry)
  all_actions_file.write('LOAD PAGE    \t' + logEntry)
  _res.send('operation recorded')
})

app.post('/subscribe', urlencodedParser, (_req, _res) => {
  const body = _req.body

  if (!body.linkNumber || !body.email) {
    _res.send('not subscribed')
    return
  }
  var logEntry = new Date().toISOString() + '\t' + (_req as any).clientIp + '\t' + ((body.linkNumber == 1) ? 'TOP     ' : 'BOTTOM  ') + '\t' + body.email + '\n'
  subscribe_file.write(logEntry)
  all_actions_file.write('SUBSCRIBE    \t' + logEntry)
  _res.send('operation recorded')
})

app.get('/test', (_req, _res) => {
  _res.send('test')

})
*/
const maxAgePeriod = 1000 * 60 * 60 * 24 * 7;
app.use(express_1.default.static('public', {
    maxAge: maxAgePeriod
}));
module.exports = app;
//# sourceMappingURL=app.js.map