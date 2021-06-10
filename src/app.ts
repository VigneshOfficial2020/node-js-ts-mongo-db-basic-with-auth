import express, { Request, Response, NextFunction } from "express";
import studentRoutes from "./routes/studentsRoutes";
import authRoutes from "./routes/auth";
import { json } from "body-parser";
const path = require("path");
import mongoose from "mongoose";

const app = express();

mongoose
  .connect("mongodb://localhost/students")
  .then(() => {
    console.log("mongodb is connected to students");
  })
  .catch(() => {
    console.log("connection failed");
  });

app.use(json());

app.listen(4000, () => {
  console.log("server is running in 4000 ");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("This is first default execution");
  next();
});

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("This is second default execution");
  next();
});

app.use("/students", studentRoutes);

app.use("/auth/", authRoutes);
