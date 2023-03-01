const router = require("express").Router();

const userLogIn = (req, res) => {
  const { email, password } = req.body;
  let person = {
    name: "Allahududdin Ayam",
    amount: "$127,200",
    History: "withdrew from bet365",
    email: "allahuddin.ayam143@icloud.com",
    password: "AllahududdinAyam",
  };

  if ((!email, !password)) {
    res.status(400);
    throw new Error("invalid request, fill in all fields");
  } else if (email === person.email && password === person.password) {
    res.send(person);
  } else {
    res.status(400).send("ERROR WRONG PASSWORD/ USERNAME");
  }
};

router.post("/login", userLogIn);

module.exports = router;
