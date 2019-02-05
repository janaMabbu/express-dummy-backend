const express = require('express')
const router = express.Router()
const mockData = require('../mock-data/mock.json')
const mockDataDelay = 200

router.post('/post-fruits', (req, res) => {
  // MockData Delay
  setTimeout(function () { res.status(200).send(mockData)}, mockDataDelay)
  // Sample Responses
  //res.status(500).send()
  //res.status(402).send({"error": "NOT_ALLOWED"})
  //res.redirect('https://www.google.com/')
})


router.get('/get-fruits', (req, res) => {
  // MockData Delay
  setTimeout(function () { res.status(200).send(mockData)}, mockDataDelay)
})

router.put('/put-fruits', (req, res) => {
  // No Delay
  res.status(200).send(mockData)
})

router.delete('/delete-fruits', (req, res) => {
  // No Delay
  res.status(200)
})


module.exports = router
