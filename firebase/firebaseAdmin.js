const firebaseConfigAdmin = require('../config/firebaseAdmin.json');

const admin = require('firebase-admin');


admin.initializeApp({
  credential: admin.credential.cert(firebaseConfigAdmin),
  storageBucket: process.env.STORAGE_BUCKET,
});

module.exports = admin;


