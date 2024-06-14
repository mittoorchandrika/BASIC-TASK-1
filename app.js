'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const { encrypt, decrypt } = require('./routes/cryptoRoutes'); // Ensure this path is correct

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' folder

// Routes
app.post('/encrypt', (req, res) => {
    const { text } = req.body;
    const encryptedText = encrypt(text);
    res.json({ encryptedText });
});

app.post('/decrypt', (req, res) => {
    const { encryptedText } = req.body;
    const decryptedText = decrypt(encryptedText);
    res.json({ decryptedText });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
