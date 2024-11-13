const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/crudDemo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});

const User = mongoose.model('User', userSchema);

// Create
app.post('/users', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.send('User created successfully!');
});

// Read
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Update
app.put('/users/:id', async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.send('User updated successfully!');
});

// Delete
app.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send('User deleted successfully!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
