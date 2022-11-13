import express, { Express, Request, Response, Router } from "express";

import { products } from "./controllers/products";

const PORT = process.env.PORT || 3000;

const app: Express = express();

console.log("POSTGRES_CONNECTION_URL", process.env.POSTGRES_CONNECTION_URL);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    data: "Simple test server is working",
  });
});

app.use("/products", products);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
