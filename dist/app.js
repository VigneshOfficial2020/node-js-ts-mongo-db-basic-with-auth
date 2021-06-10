"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studentsRoutes_1 = __importDefault(require("./routes/studentsRoutes"));
const auth_1 = __importDefault(require("./routes/auth"));
const body_parser_1 = require("body-parser");
const path = require("path");
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
mongoose_1.default
    .connect("mongodb://localhost/students")
    .then(() => {
    console.log("mongodb is connected to students");
})
    .catch(() => {
    console.log("connection failed");
});
app.use(body_parser_1.json());
app.listen(4000, () => {
    console.log("server is running in 4000 ");
});
app.use((req, res, next) => {
    console.log("This is first default execution");
    next();
});
app.use((req, res, next) => {
    console.log("This is second default execution");
    next();
});
app.use("/students", studentsRoutes_1.default);
app.use("/auth/", auth_1.default);
