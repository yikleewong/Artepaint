import express from 'express';
import { readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 5000;

// Get the __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

app.get('/api/photos', async (req, res) => {
  try {
    const photosDir = path.join(__dirname, '..', 'client', 'public', 'photos');
    const files = await readdir(photosDir);
    const photos = files.map(file => `/photos/${file}`);
    res.json(photos);
  } catch (err) {
    res.status(500).json({ error: 'Unable to scan directory' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
