const express = require("express");
const router = express.Router();
const db = require("../utiliti/db");

router.post("/", async (req, res) => {
  const { name, email, age } = req.body;
  console.log(name, email, age);
  try {
    await db.execute(`INSERT INTO users (name,email,age) VALUES (?,?,?)`, [
      name,
      email,
      age,
    ]);
    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await db.execute("SELECT * FROM users");
    res.json(users[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await db.execute("SELECT * FROM users WHERE userId=?", [id]);
    res.json(user[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  try {
    await db.execute("UPDATE users SET name=?,email=?,age=? WHERE userId=?", [
      name,
      email,
      age,
      id,
    ]);
    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await db.execute("DELETE FROM users WHERE userId=?", [id]);
    res.json({ message: "success" });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
