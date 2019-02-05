const express = require('express')
const router = express.Router()
const mockData = require('../mock-data/mock1.json')
const mockDataDelay = 200

router.get('/get-fruit/:id', (req, res) => {
  // MockData Delay
  setTimeout(function () { res.status(200).send(mockData)}, mockDataDelay)
})

router.put('/update-fruit/:id', (req, res) => {
  // No Delay
  res.status(200).send(mockData)
})

module.exports = router
