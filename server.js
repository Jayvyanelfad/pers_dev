const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();

app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://PersonalDevelopmentAcademyUser:Vihoutou2002#@personaldevelopmentacad.txpcn.mongodb.net/?retryWrites=true&w=majority&appName=PersonalDevelopmentAcademyCluster";

// MongoDB Client to ensure connection
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// Mongoose connection
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Schema and Model for courses
const courseSchema = new mongoose.Schema({
    name: String,
    description: String
});

const Course = mongoose.model('Course', courseSchema);

// Schema and Model for Enrollment
const enrollmentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    course: String
});

const Enrollment = mongoose.model('Enrollment', enrollmentSchema);

// API Endpoints
app.get('/courses', async (req, res) => {
    const courses = await Course.find();
    res.send(courses);
});

app.post('/rate', async (req, res) => {
    const { course, rating, comment } = req.body;
    res.send('Rating submitted!');
});

// API Endpoint to Handle Enrollment
app.post('/enroll', async (req, res) => {
    const { firstName, lastName, email, phone, course } = req.body;

    // Create a new enrollment document
    const newEnrollment = new Enrollment({
        firstName,
        lastName,
        email,
        phone,
        course
    });

    // Save the enrollment document to MongoDB
    try {
        await newEnrollment.save();
        res.status(201).send('Enrollment successful!');
    } catch (error) {
        console.error('Error saving enrollment:', error);
        res.status(500).send('Error enrolling!');
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
