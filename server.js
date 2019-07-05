const express = require('express');
const app = express();

// TEST ROUTES
app.get('/', (req, res) => {
  res.send('testing routes');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server runs on port: ${PORT}`));
