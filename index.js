const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

// Serve static files from the build folder
//app.use(express.static(path.join(__dirname, 'build')));


// Serve the React app HTML file
app.get('/n', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  
  // Serve the static CSS file
  app.get('/static/css/main.4af5f74d.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'static', 'css', 'main.4af5f74d.css'));
  });
  
  // Serve the static JS file
  app.get('/static/js/main.910328e4.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'static', 'js', 'main.910328e4.js'));
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
