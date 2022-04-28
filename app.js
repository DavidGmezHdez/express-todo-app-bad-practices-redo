import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
const { TaskRouter } = require("./src/task");

// === initialisation == //
app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// === endpoints == //

app.use("/api/v1/task", TaskRouter);
// === run app == //
app.listen(8000, () => console.log(`Example app running!`));

app.get("/", (req, res) => {
  res.json({ Success: "Successfully connected to server" });
});
