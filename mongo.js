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
        nickname: 'Jasmine',
        hobby: 'Exploring',
        job: 'Testing applications',
        age: 12,
        bookie: true,
        play: 'Jasmine Test',
        tags: ['Jasmine', 'Test']
    })
    
    const result = await play.save()
    console.log('====================================');
    console.log(result)
    console.log('====================================');
}

async function getPlays() {
    const plays = await Play
        
        /* 
          Normal Query 
            .find({ bookie: false }) 
        */

        /* 
          Comparison Query 
            .find({ age: { $gte: 10, $lte: 20 } })
            .find({ age: { $in: [5, 10, 15] } }) 
        */
        
        /* 
          Logical Query 
            .find()
            .or([{ age: { $gte: 5, $lte: 20  } }, { bookie: false }]) 
        */

        /*
          Regular Expression Query
           1] Starts with 'J'
            .find({ nickname: /^J/ })

           2] Ends with 'A' (Case insensitive)
            .find({ nickname: /A$/i })
        
           3] Contains 'A' (Case insensitive)
            .find({ nickname: / .*A.* /i })
        */


        .find({ nickname: /A$/i })
        .limit(10)
        .sort({nickname: 1})
        .select({nickname : 1, play: 1, age: 1, bookie: 1 })
    
    console.log('====================================');
    console.log(plays);
    console.log('====================================');
}

playground()
getPlays()
