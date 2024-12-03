const express = require('express');
const bodyParser = require('body-parser');
const lessonRoutes = require('./routes/lessonRoutes');

const app = express();
const port = 3000;

// Middleware untuk parsing JSON request body
app.use(bodyParser.json());

// Gunakan routes
app.use('/api', lessonRoutes);

// Jalankan server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
