import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 5000;

dotenv.config();

// these are middlewares
app.use(express.json()); //to parse the incoming req with JSON payloads (from req.body)
app.use(cookieParser()); // to parse the cookies from the req.headers

// before any of the routes are run, first run the middlewares above.
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running on port ${PORT}`);
});
