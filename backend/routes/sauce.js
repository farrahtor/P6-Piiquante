const express = require("express");
const router = express.Router();

const sauceCtrl = require("../controllers/sauce");
const auth = require("../middleware/auth");
const mutler = require("../middleware/multer-config");

router.get("/", sauceCtrl.getAllSauce);
router.post("/", auth, mutler, sauceCtrl.createSauce);
router.put("/:id", auth, mutler, sauceCtrl.modifySauce);
router.delete("/:id", auth, sauceCtrl.deleteSauce);
router.get("/:id", auth, sauceCtrl.getOneSauce);
router.post("/:id/like", auth, sauceCtrl.countLikeSauce);
module.exports = router;
