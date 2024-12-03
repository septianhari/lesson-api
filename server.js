const express = require('express');
const bodyParser = require('body-parser');
const lessonRoutes = require('./routes/lessonRoutes');

const app = express();
const port = 8080;

// Middleware untuk parsing JSON request body
app.use(bodyParser.json());

// Rute untuk root
app.get('/', (req, res) => {
  res.send('Welcome to the Lesson API!');
});

// Gunakan routes untuk /api
app.use('/api', lessonRoutes);

// Jalankan server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});