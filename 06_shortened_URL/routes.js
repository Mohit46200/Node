const express = require("express")
const {generateNewShortUrl,analytics,redirect} = require("./controller")

const router = express.Router()

router.post("/",generateNewShortUrl)
router.get("/analytics/:shortId",analytics)
router.get("/:shortId",redirect)

module.exports = router