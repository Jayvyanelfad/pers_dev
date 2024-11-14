const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('your_mongodb_connection_string', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const ratingSchema = new mongoose.Schema({
    course: String,
    rating: Number,
    comment: String
});

const Rating = mongoose.model('Rating', ratingSchema);

app.post('/rate', async (req, res) => {
    const { course, rating, comment } = req.body;
    const newRating = new Rating({ course, rating, comment });
    await newRating.save();
    res.send(newRating);
});

app.get('/ratings', async (req, res) => {
    const ratings = await Rating.find();
    res.send(ratings);
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
