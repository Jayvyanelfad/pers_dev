const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/enrollmentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define the schema and model for enrollments
const enrollmentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  course: String
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

// Define routes
app.post('/enroll', async (req, res) => {
  const newEnrollment = new Enrollment({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    course: req.body.course
  });

  await newEnrollment.save();
  res.send('Enrollment successful!');
});

app.get('/enrollments', async (req, res) => {
  const enrollments = await Enrollment.find();
  res.json(enrollments);
});

app.post('/update-enrollment', async (req, res) => {
  await Enrollment.updateOne({ _id: req.body.id }, {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    course: req.body.course
  });
  res.send('Enrollment updated successfully!');
});

app.post('/delete-enrollment', async (req, res) => {
  await Enrollment.deleteOne({ _id: req.body.id });
  res.send('Enrollment deleted successfully!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
