import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import config from "./config/config";
const { TaskRouter } = require("./src/task");

if (dotenv.config()) {
  console.error("Error configurating process environment");
}
// === initialisation == //
app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const {
  db: { port },
} = config;

// === endpoints == //

app.use("/api/v1/task", TaskRouter);
// === run app == //
app.listen(port, () => console.log(`Example app running!`));

app.get("/", (req, res) => {
  res.json({ Success: "Successfully connected to server" });
});
