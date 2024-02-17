// Import the 'fs' (file system) module
const fs = require('fs');

// Read the content of a file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
    // Handle errors, if any
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Log the content of the file to the console
    console.log('File content:', data);
});
