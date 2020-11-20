const mongoose = require('mongoose')

mongoose.connect("mongodb://172.17.0.2:27017/playground", 
  { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('successfully connected to mongodb'))
    .catch((err) => { throw new Error("Oops an error", err) })

const playSchema = new mongoose.Schema({
    nickname: String,
    hobby: String,
    job: String,
    date: { type: Date, default: Date.now },
    age: Number,
    bookie: Boolean,
    play: String,
    tags: [String]
})

const Play = mongoose.model('Play', playSchema)

async function playground () {
    const play = new Play ({
        nickname: 'Tidbits',
        hobby: 'Exploring',
        job: 'Coding',
        age: 10,
        bookie: false,
        play: 'Black Love',
        tags: ['Writer', 'Motivator', 'Passionate']
    })
    
    const result = await play.save()
    console.log(result)
}

playground()