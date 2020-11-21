const mongoose = require('mongoose')

mongoose.connect("mongodb://172.17.0.2:27017/mongo-exercises", 
    {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => console.log("Successfully Connected to MongoDB"))
        .catch((err) => {throw new Error("Oops an Error", err)})

const courseSchema = new mongoose.Schema({
    tags: [String],
    date: { type: Date, default: Date.now },
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
})

const Course = mongoose.model('Course', courseSchema)

async function getBackendCourses() {
    const courses =  await Course
        .find({ tags: 'backend' , isPublished: true })
        .sort({ name: 1 })
        .select({ name: 1, author: 1 })

    console.log('====================================');
    console.log(courses);
    console.log('====================================');
}

async function getFullstackCourses() {
    const fullstackCourses = await Course
        .find({isPublished: true}) 
        .or([{ tags: 'backend' } , { tags: 'frontend' }])
        .sort({price: -1})
        .select({ name: 1, author: 1 })
    
    console.log('====================================');
    console.log(fullstackCourses);
    console.log('====================================');
}

async function getPaidCourses() {
    const paidCourses = await Course
        .find({ isPublished: true })
        .or([{ price: {$gte: 15} }, {name: /.*By.*/i }])

    console.log('====================================');
    console.log(paidCourses);
    console.log('====================================');
}

getBackendCourses()
getFullstackCourses()
getPaidCourses()

/*
    const fullstachCourses = await Course
        .find({ isPublished: ture , tags: { $in: ['backend', 'frontend'] } })
        .sort('-price')
        .select('name author')
*/
