/**
 * @fileoverview main route controller
 */
import { RequestHandler } from "express";
import path from "path";

export const mainRequestHandler: RequestHandler = (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
};
