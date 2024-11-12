const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/enrollment', { useNewUrlParser: true, useUnifiedTopology: true });

// Define User Schema
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String
});
const User = mongoose.model('User', userSchema);

// Middleware
app.use(bodyParser.json());
app.use(express.static('views'));  // Serve HTML files

// Route to handle enrollment form submission
app.post('/enroll', (req, res) => {
    const newUser = new User(req.body);
    newUser.save((err) => {
        if (err) {
            res.status(500).send("Failed to enroll");
        } else {
            res.status(200).send("Enrollment successful");
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
