import { Router, Request, Response } from "express";

import data from "../data/product.json";

export const products: Router = Router();

products.get("/", (req: Request, res: Response) => {
  res.status(200).json(data);
});

products.get("/:id", (req: Request, res: Response) => {
  const product = data.find((p) => p.id === req.params.id);
  res.status(200).json(product);
});
