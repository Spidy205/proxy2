import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3333;

app.use(express.static('public'));

const videoURL = 'https://lite-stream.vercel.app'; // Replace with your video URL
const token = 'jTr0WEXVZEXGGpIvIPbMzepKH6IJMhNxDtEMEMXB'; // Replace with your access token

app.get('/fetch-video', async (req, res) => {
  try {
    const response = await fetch(videoURL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.status === 200
      ? response.body.pipe(res)
      : res.status(response.status).send(response.statusText);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
});
