const express = require('express');

const router = express.Router();


const {
    bookFlight,
    getAllFlight,
    getFlight,
    editFlight,
    deleteFlight
} = require('../controllers/flightController');

router.get('/', getAllFlight)
router.get('/getFlight', getFlight)
router.post('/booking', bookFlight)
router.patch('/EditTicket', editFlight)
router.post('/delete', deleteFlight)

module.exports = router;