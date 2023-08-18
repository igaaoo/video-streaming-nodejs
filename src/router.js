const express = require('express');
const router = express.Router();
const admin = require('../firebase/firebaseAdmin');

router.get('/', (request, response) => {
  response.status(200).send('Router funcionando!');
});

router.get('/video/:videoId', async (req, res) => {
  const videoId = req.params.videoId;
  const bucket = admin.storage().bucket();
  const file = bucket.file(`videos/${videoId}.mp4`);

  // Defina os cabeçalhos apropriados para o streaming de vídeo
  res.setHeader('Content-Type', 'video/mp4');
  res.setHeader('Cache-Control', 'public, max-age=604800'); // Opcional, para cache

  // Crie um stream de leitura do arquivo e transmita para a resposta
  const readStream = file.createReadStream();
  readStream.pipe(res);
});



module.exports = router;
