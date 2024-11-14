const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();

const helpRoute = require('./HelpRoute');
const helpAPI = require('./HelpAPI');
const contactUsRoute = require('./ContactUsRoute');
const contactUsAPI = require('./ContactUsAPI');
const rateContentRoute = require('./RateContentRoute');
const rateContentAPI = require('./RateContentAPI');

app.use(express.json());
app.use(cors());

const uri = "mongodb+srv://PersonalDevelopmentAcademyUser:Vihoutou2002#@personaldevelopmentacad.txpcn.mongodb.net/?retryWrites=true&w=majority&appName=PersonalDevelopmentAcademyCluster";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
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

app.use(helpRoute);
app.use(helpAPI);
app.use(contactUsRoute);
app.use(contactUsAPI);
app.use(rateContentRoute);
app.use(rateContentAPI);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
