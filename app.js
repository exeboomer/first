var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var posts = [
  { title: 'my first post', content: 'lalalalalal' },
  { title: 'my 2 post', content: 'lalalalalal' },
  { title: 'my 3 post', content: 'lalalalalal' }
];

app.get('/', function (req, res) {
  res.render('index.ejs', { posts: posts });
});

app.get('/post/:id', function (req, res) {
  var id = req.params.id;
  res.render('post.ejs', { post: posts[id - 1] });
});

app.get('/write', function (req, res) {
  res.render('write.ejs');
});

app.post('/write', function (req, res) {
  var title = req.body.title;
  var content = req.body.content;

  posts.push({ title: title, content: content });

  res.redirect('/');
});

app.listen(3000, function () {
  console.log('work on port:3000');
});
