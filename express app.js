const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dbURI = 'mongodb://localhost:27017/mydatabase'; 
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.get('/', (req, res) => {
      res.send('MongoDB connection successful!');
    });
  })
  .catch((err) => console.log('Error connecting to MongoDB:', err));
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
