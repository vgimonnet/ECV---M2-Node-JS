const express = require('express');
const router = express.Router();

const { helloWorld, message, infosHeaders, user, rickRoll, customHeader, getParams } = require('../handlers/handlers.js');

//  Exo 1
router.get('/hello-world', helloWorld(req, res));

// Exo 2
router.get('/message', message(req, res));

// Exo 3
router.post('/infos/headers', infosHeaders(req, res));

// Exo 4
router.post('/user', user(req, res));


// Exo 5
router.get('/rick-roll', rickRoll(req, res));

// Exo 6
router.delete('/custom-header', customHeader(req, res));

// Exo 8
router.get('/params/:id/:key/:slug', getParams(req, res));

module.exports = router;