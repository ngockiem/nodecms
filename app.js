const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();
const port = 3000;


/* Config Express */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'publics')));

/* Config Mongoose connect MongoDB */
mongoose.connect('mongodb://localhost:27017/cms', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB connected !!');
});

/* Configure view engine with handlebars */
app.engine('handlebars', hbs({defaultLayout: 'default'}));
app.set('view engine', 'handlebars');

app.use('/', (req, res) => {
  res.render('default/index');
});


app.listen(port, () => console.log(`Server listening on port ${port}!`));
