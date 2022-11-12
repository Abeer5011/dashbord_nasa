const express = require("express")
const router = express.Router()
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args))

router.get(`/`, async function (req, res) {
  const url1 = `https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/latest_photos?api_key=${process.env.API_KEY}`
  const url2 = `https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/latest_photos?api_key=${process.env.API_KEY}`
  const url3 = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=${process.env.API_KEY}`

  try {
    let response = await Promise.all([fetch(url1), fetch(url2), fetch(url3)])
    const data1 = await response[0].json()
    const data2 = await response[1].json()
    const data3 = await response[2].json()

    res.status(200).json([data1, data2, data3])
  } catch (err) {
    console.log(err)
    res.status(500).json({ msg: `Internal Server Error.` })
  }
})

module.exports = router
