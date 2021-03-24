/**
 * @fileoverview App server
 */
import express, { NextFunction } from "express";
// import { json } from "body-parser";
import todoRoutes from "./routes/todos";
import mainRoute from "./routes/main";
import ignore from "./routes/icoroute";
import path from "path";
import https from "https";
import { httpsServerOptions } from "./config/https-server-options";

const app = express();

// JSON middleware, incoming message must be in JSON format
app.use(express.json());
// form middleware 
app.use(express.urlencoded({ extended: true }));

app.use('/todos', todoRoutes);
app.use('/', mainRoute);
app.use("/favicon.ico", ignore);

app.use(express.static(path.resolve(__dirname, "public")));

app.use((
  err: Error,
  req: express.Request,
  res: express.Response,
  next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

https.createServer(httpsServerOptions, app).listen(3000, () => {
  console.log("running at 3000");
});
