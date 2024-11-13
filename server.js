const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/enrollmentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Schema and model for enrollments
const enrollmentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  course: String
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

// Create new enrollment
app.post('/enroll', async (req, res) => {
  const newEnrollment = new Enrollment(req.body);
  try {
    await newEnrollment.save();
    res.send('Enrollment successful!');
  } catch (error) {
    res.status(500).send('Enrollment failed');
  }
});

// Read all enrollments
app.get('/enrollments', async (req, res) => {
  try {
    const enrollments = await Enrollment.find();
    res.json(enrollments);
  } catch (error) {
    res.status(500).send('Error retrieving enrollments');
  }
});

// Update enrollment
app.post('/update-enrollment', async (req, res) => {
  try {
    await Enrollment.updateOne({ _id: req.body.id }, req.body);
    res.send('Enrollment updated successfully!');
  } catch (error) {
    res.status(500).send('Update failed');
  }
});

// Delete enrollment
app.post('/delete-enrollment', async (req, res) => {
  try {
    await Enrollment.deleteOne({ _id: req.body.id });
    res.send('Enrollment deleted successfully!');
  } catch (error) {
    res.status(500).send('Deletion failed');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
