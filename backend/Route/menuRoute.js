const express = require('express');
const multer = require("multer");
const menuController = require('../Controller/menuController');
const authMiddleware = require('../Middelware/authMiddleware');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "C:/Users/ddoba/Downloads/Frontend/frontend/public/Images");
    },

    filename: function(req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });
router.post("/add-menu-item", upload.single('image'), menuController)

module.exports = router