import { Router } from "express";

const router = Router();

router.post("/register", (req, res) => {
  const { email } = req.body;
  return res.status(201).json({ email });
});

export default router;
