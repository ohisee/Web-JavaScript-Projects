/**
 * @fileoverview handle favicon.ico route 
 */
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.writeHead(200, { "Conten-Type": "image/x-icon" }).end();
});

export default router;
