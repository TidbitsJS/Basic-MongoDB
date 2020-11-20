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

async function playground() {
    const play = new Play ({
        nickname: 'Tom',
        hobby: 'Sleeping',
        job: 'Running',
        age: 7,
        bookie: false,
        play: 'Tom and Jerry',
        tags: ['Cartoon', 'Blue', 'Jerry']
    })
    
    const result = await play.save()
    console.log('====================================');
    console.log(result)
    console.log('====================================');
}

async function getPlays() {
    const plays = await Play
        .find({bookie: false})
        .sort({nickname: 1})
    
    console.log('====================================');
    console.log(plays);
    console.log('====================================');
}

playground()
getPlays()
