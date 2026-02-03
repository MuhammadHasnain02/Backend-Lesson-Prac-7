import express from "express";
import { userRoutes } from "./routes/userRoutes.js";

const app = express();
const port = 3000;

// -------------- user routes ----------------

app.use(userRoutes)

// -------------- Server Listen ----------------

app.listen(port, () => {
  console.log(`Server Running On Port: ${port}`);
});