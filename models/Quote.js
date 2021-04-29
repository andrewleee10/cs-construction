const { model, Schema } = require('mongoose')

const Quote = new Schema({
  userInfo: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  description: String,
  jobType: String
})

Quote.plugin(require('passport-local-mongoose'))

module.exports = model('Quote', Quote)