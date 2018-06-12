const express = require('express');
const mongoose = require('mongoose');
const graphqlHttp = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');

const app = express();

//allow CROS
app.use(cors());

mongoose.connect('mongodb://localhost:27017/graphql-playlist');
mongoose.connection.once('open', () => {
  console.log('connected to local mongo database');
});

app.use('/graphql', graphqlHttp({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for request on port 4000');
});