"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, "secret_this_should_be_longer");
        req.userData = { role: decodedToken.role, email: decodedToken.email };
        console.log("req.userData", req.userData);
        next();
    }
    catch (error) {
        res.status(401).json({ message: "You are not authenticated!" });
    }
};
exports.auth = auth;
