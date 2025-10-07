const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Serve CSS files
app.use('/css', express.static(path.join(__dirname, 'css')));

// Serve JS files
app.use('/js', express.static(path.join(__dirname, 'js')));

// Serve public files
app.use('/public', express.static(path.join(__dirname, 'public')));

// Handle all routes - serve index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle all HTML files
app.get('*.html', (req, res) => {
  res.sendFile(path.join(__dirname, req.path));
});

// 404 handler
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Michael's House website running on port ${PORT}`);
});
