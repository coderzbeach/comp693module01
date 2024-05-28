import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 5000;

// Get the directory name of the current module file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set 'public' folder as a static folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to load 'index.html' from the 'public' folder
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server and listen on port 5000
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});