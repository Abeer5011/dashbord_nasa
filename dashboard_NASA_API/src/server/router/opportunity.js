const express = require("express")
const router = express.Router()
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args))

router.get(`/`, async function (req, res) {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=${process.env.API_KEY}`

  try {
    let response = await fetch(url)
    response = await response.json()
    res.status(200).json(response)
  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: `Internal Server Error.` })
  }
})

module.exports = router
