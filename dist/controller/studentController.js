"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.getStudents = exports.createStudent = void 0;
const studentModel_1 = __importDefault(require("../model/studentModel"));
const createStudent = async (req, res, next) => {
    try {
        let reqBody = req.body;
        let studentName = reqBody.name;
        console.log(studentName);
        const newStudent = new studentModel_1.default({ name: studentName });
        const data = await newStudent.save({
            new: true,
        });
        // logger.info("Inside createTodo API data =" + data);
        res.status(201).json({
            message: "Successfully created",
            data: data,
            result: 1,
        });
    }
    catch (err) {
        // logger.console.error("error in createTodo API", err);
        res.status(500).json({
            message: "Internal server error while creating.Please contact admin",
        });
    }
};
exports.createStudent = createStudent;
const getStudents = async (req, res, next) => {
    //   logger.info("Inside getTodos API");
    const data = await studentModel_1.default.find();
    res.status(200).json({ data: data });
};
exports.getStudents = getStudents;
const updateStudent = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log("params", id);
        const studentName = req.body.name;
        const filter = { _id: id };
        const update = { name: studentName };
        let existingData = await studentModel_1.default.findOneAndUpdate(filter, update, {
            new: true,
        });
        res.status(200).json({
            message: "updated Successfully",
            result: existingData,
        });
    }
    catch (err) {
        res.status(500).json({
            message: "Internal server error while updating.Please contact admin",
        });
    }
};
exports.updateStudent = updateStudent;
const deleteStudent = async (req, res, next) => {
    //   logger.info("Inside deleteTodo API");
    try {
        const id = req.params.id;
        console.log("params", id);
        const filter = { _id: id };
        let existingData = await studentModel_1.default.findOneAndDelete(filter);
        res.status(200).json({
            message: "updated Successfully",
            result: existingData,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal server error while deleting.Please contact admin",
        });
    }
};
exports.deleteStudent = deleteStudent;
