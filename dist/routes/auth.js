"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controller/auth");
const router = express_1.Router();
router.post("/register", auth_1.userRegister);
router.post("/login", auth_1.userLogin);
exports.default = router;
