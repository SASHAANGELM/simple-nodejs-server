import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import { products } from "./controllers/products";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app: Express = express();

console.log("POSTGRES_CONNECTION_URL", process.env.POSTGRES_CONNECTION_URL);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    data: "Hello from develop branch",
  });
});

app.use("/products", products);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
