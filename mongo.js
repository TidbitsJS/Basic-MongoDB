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
        nickname: 'Hobbit',
        hobby: 'Living',
        job: 'Doing an adventure',
        age: 15,
        bookie: true,
        play: 'The Unexpected Journey',
        tags: ['Small', 'Dwarves', 'Elevs']
    })
    
    const result = await play.save()
    console.log('====================================');
    console.log(result)
    console.log('====================================');
}

async function getPlays() {
    const plays = await Play
        // .find({bookie: false})
        // .find({ age: { $gte: 10, $lte: 20 }})
        .find({age: {$in: [5, 10, 15]}})
        .sort({nickname: 1})
        .select({nickname : 1, play: 1 })
    
    console.log('====================================');
    console.log(plays);
    console.log('====================================');
}

playground()
getPlays()
