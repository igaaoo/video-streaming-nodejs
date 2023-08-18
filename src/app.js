const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const ratelimit = require('express-rate-limit');
const cors = require('cors');


const app = express();

//Habilita CORS, Bloqueia requisições de outros domínios e permite apenas GET e POST
app.use(
  cors({
    methods: ['GET', 'POST'],
  })
);

//Habilita o helmet para proteção contra XSS
app.use(
  helmet({
    xssFilter: true,

  })
);

//Limita o número de requisições por IP
app.use(
  ratelimit({
    windowMs: 5 * 60 * 1000,
    max: 200,
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: {
      error: 'Foram detectadas muitas requisições, tente novamente mais tarde!',
    },
  })
);


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);





module.exports = app;
