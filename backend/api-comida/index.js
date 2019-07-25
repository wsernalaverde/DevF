const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://user-exercises:abcd1234@cluster0-imbkw.mongodb.net/api-comida?retryWrites=true&w=majority';
mongoose.connect(MONGO_URI, { useNewUrlParser: true });
const mongo = mongoose.connection();
mongo.on('error', () => console.log(err)).once('open', () => console.log('Database connected succesfully'));
