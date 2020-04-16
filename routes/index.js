const express = require('express');
const router = express.Router();

const dnaCheckerController = require('../controllers/dnaCheckerController');

module.exports = () => {


    router.post('/mutation', dnaCheckerController.checkDna);

    router.get('/stats',dnaCheckerController.mostrarEstadisticas);

    return router;
}