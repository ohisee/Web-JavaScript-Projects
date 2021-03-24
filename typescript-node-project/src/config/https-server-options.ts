/**
 * @fileoverview https server options
 */
import fs from "fs";
import https from "https";

export const httpsServerOptions: https.ServerOptions = {
  key: fs.readFileSync(__dirname + "/cert.key"),
  cert: fs.readFileSync(__dirname + "/cert.pem")
};
