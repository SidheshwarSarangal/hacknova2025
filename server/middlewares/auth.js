import { verify } from "jsonwebtoken";
import User from "../models/Student";
require("dotenv").config();

export async function auth(req, res, next) {
    try {
        const token = req.cookies.token || req.body.token || req.header("Authorization")?.replace("Bearer ", "");
        if(token){
            console.log(token);
        }
        if (!token) {
            return res.status(401).json({ success: false, message: 'Token is missing' });
        }
        try {
            const decoded = verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            next();
        } catch (err) {
            return res.status(401).json({ success: false, message: 'Token is invalid' });
        }
    } catch (error) {
        return res.status(401).json({ success: false, message: 'Something went wrong while validating the token' });
    }
}
