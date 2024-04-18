import mongoose from 'mongoose';
const express = require('express');

app.use(express.json());
const PORT = 3000;
const MONGO_URI = 'mongodb+srv://dpbaldon:6sgCczBkWY2ITVOg@cluster0.13bwyiw.mongodb.net/ICS';

// Connect to MongoDB
await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  });