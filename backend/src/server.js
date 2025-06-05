const express = require('express');
const cors = require('cors');
const healthRouter = require('./interfaces/routes/health');

const app = express();
const PORT = 3000; // Explicitly set to 3000

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/health', healthRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; 