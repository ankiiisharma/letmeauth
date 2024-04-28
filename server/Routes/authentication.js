const express = require("express");
// const router = express.Router();
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");

//middlewares
router.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173", "https://letmeauth-server.vercel.app/"],
  })
);

router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);

module.exports = router;
