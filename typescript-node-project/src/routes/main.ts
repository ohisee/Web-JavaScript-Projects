/**
 * @fileoverview main route 
 */
import { Router } from "express";
import { mainRequestHandler } from "../controllers/main";

const router = Router();

router.get("/", mainRequestHandler);

router.post("/verify", (req, res) => {
  res.status(200).json({"received": true})
});

export default router;
