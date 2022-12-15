const moogoose = require('mongoose')

const CommentSchema = moogoose.Schema({
  comment: String
})

const SerieSchema = moogoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enumValues: ['to-watch', 'watching', 'watched']
    },
    comments: [CommentSchema]
})

const Serie = moogoose.model('Serie', SerieSchema)

module.exports = Serie