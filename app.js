const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('express-handlebars');

const {mongoDBUrl, PORT} = require('./config/configuration');

const app = express();


/* Config Express */
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'publics')));

/* Config Mongoose connect MongoDB */
mongoose.connect(mongoDBUrl, {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB connected !!');
});

/* Configure view engine with handlebars */
app.engine('handlebars', hbs({defaultLayout: 'default'}));
app.set('view engine', 'handlebars');

/* Routes */
const defaultRoutes = require('./routes/defaultRoutes');
app.use('/', defaultRoutes);


app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
