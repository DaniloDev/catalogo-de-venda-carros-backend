import moogoose from 'mongoose'

const CommentSchema = new moogoose.Schema({
    comment: String
})

const SerieSchema = new moogoose.Schema({
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

export default Serie