module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/cs-construction', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
