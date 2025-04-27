import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/User.js';

const protectRoute = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      req.user = await User.findById(decoded.id);

      next();
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        res.status(401).json({ message: "Token expired, please log in again" });
      } else {
        res.status(401).json({ message: "Not authorized, token failed" });
      }
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
});

const admin = (req, res, next) => {
	if (req.user && req.user.isAdmin) {
		next();
	} else {
		res.status(401);
		throw new Error('Not authorized as an admin.');
	}
};

export { protectRoute, admin };