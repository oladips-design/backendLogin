const router = require("express").Router();

const userLogIn = asyncHandler(async (req, res) => {
  let person = {
    name: "Allahududdin Ayam",
    amount: "$127,200",
    History: "withdrew from bet365",
    email: "allahuddin.ayam143@icloud.com",
    password: "AllahududdinAyam",
  };

  const { email, password } = person;

  if ((!email, !password)) {
    res.status(400);
    throw new Error("invalid request, fill in all fields");
  } else {
    res.send(person);
  }
});

router.post("/login", userLogIn);

module.exports = router;
