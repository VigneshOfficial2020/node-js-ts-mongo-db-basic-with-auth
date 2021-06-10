"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.userRegister = void 0;
const auth_1 = __importDefault(require("../model/auth"));
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userRegister = (req, res, next) => {
    try {
        bcrypt.hash(req.body.password, 10).then((hash) => {
            let userCreate = new auth_1.default({
                email: req.body.email,
                password: hash,
            });
            userCreate.save((err) => {
                if (err) {
                    res.send(err);
                }
                else {
                    res.status(201).json({ message: "success" });
                }
            });
        });
    }
    catch (err) {
        res.status(400).json({ message: "error", error: err });
    }
};
exports.userRegister = userRegister;
const userLogin = async (req, res, next) => {
    try {
        let data = await auth_1.default.findOne({ email: req.body.email });
        console.log("data", data);
        if (!data) {
            res.status(400).json({ message: "user not found" });
        }
        let result = await bcrypt.compare(req.body.password, data.password);
        console.log("result", result);
        if (!result) {
            res.status(400).json({ message: "password does not match" });
        }
        const token = jwt.sign({ role: 1, email: data.email }, "secret_this_should_be_longer", { expiresIn: 50 });
        res.status(200).json({
            token: token,
        });
    }
    catch (err) {
        res.status(400).json({ message: "error", error: err });
    }
};
exports.userLogin = userLogin;
