import express, { Router } from "express";
import {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent,
} from "../controller/studentController";

import { auth } from "../middleware/auth";

const app = express();

const router = Router();

router.post("/", [auth, createStudent]);
router.get("/", [auth, getStudents]);
router.patch("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;
