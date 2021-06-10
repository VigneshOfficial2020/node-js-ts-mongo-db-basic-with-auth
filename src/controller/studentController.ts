import { RequestHandler } from "express";
import studentModel from "../model/studentModel";

export const createStudent: RequestHandler = async (req, res, next) => {
  try {
    let reqBody = req.body;

    let studentName: string = reqBody.name;
    console.log(studentName);

    const newStudent = new studentModel({ name: studentName });
    const data = await newStudent.save({
      new: true,
    });
    // logger.info("Inside createTodo API data =" + data);
    res.status(201).json({
      message: "Successfully created",
      data: data,
      result: 1,
    });
  } catch (err) {
    // logger.console.error("error in createTodo API", err);
    res.status(500).json({
      message: "Internal server error while creating.Please contact admin",
    });
  }
};

export const getStudents: RequestHandler = async (req, res, next) => {
  //   logger.info("Inside getTodos API");
  const data = await studentModel.find();
  res.status(200).json({ data: data });
};

export const updateStudent: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log("params", id);
    const studentName = req.body.name;
    const filter = { _id: id };
    const update = { name: studentName };
    let existingData = await studentModel.findOneAndUpdate(filter, update, {
      new: true,
    });
    res.status(200).json({
      message: "updated Successfully",
      result: existingData,
    });
  } catch (err) {
    res.status(500).json({
      message: "Internal server error while updating.Please contact admin",
    });
  }
};

export const deleteStudent: RequestHandler = async (req, res, next) => {
  //   logger.info("Inside deleteTodo API");

  try {
    const id = req.params.id;
    console.log("params", id);
    const filter = { _id: id };
    let existingData = await studentModel.findOneAndDelete(filter);
    res.status(200).json({
      message: "updated Successfully",
      result: existingData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error while deleting.Please contact admin",
    });
  }
};
