const express = require("express")
const router = express.Router()

const bookController = require('../controllers/book.controller')

router.get("/getUser", bookController.getUser)
router.post("/postLoginUser", bookController.checkUser)
router.post("/postRegisUser", bookController.insertUser)
router.post("/postRegisOg", bookController.insertOrganisasi)
router.post("/postAddProyek", bookController.insertProyek)

module.exports = router