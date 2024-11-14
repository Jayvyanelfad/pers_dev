const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();

app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://PersonalDevelopmentAcademyUser:Vihoutou2002#@personaldevelopmentacad.txpcn.mongodb.net/?retryWrites=true&w=majority&appName=PersonalDevelopmentAcademyCluster";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
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

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const courseSchema = new mongoose.Schema({
    name: String,
    description: String
});

const Course = mongoose.model('Course', courseSchema);

app.get('/courses', async (req, res) => {
    const courses = await Course.find();
    res.send(courses);
});

app.post('/rate', async (req, res) => {
    const { course, rating, comment } = req.body;
    res.send('Rating submitted!');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
