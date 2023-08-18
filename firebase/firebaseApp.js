const firebaseApp = require('firebase/app');
const firebaseConfig = require('../config/firebaseConfig.json');


firebaseApp.initializeApp(firebaseConfig);

module.exports = firebaseApp;