import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";

import swagger from "./swagger";

const app: Application = express();
const port: number = 3210;

app.use(express.json());

swagger(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
