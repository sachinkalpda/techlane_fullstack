
const express = require('express');

const router = express.Router();

const modelController = require('../../../controllers/api/v1/model_controller');

// for getting the metric data
router.get('/metrics',modelController.metric);

// for hitting the ai model and getting perdiction 
router.get('/perdictions', modelController.perdictions);



module.exports = router;