const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve business model canvas page
app.get('/canvas', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'business_model_canvas.html'));
});

// Export the Express API
module.exports = app;

// Start server only if not running on Vercel
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
} 