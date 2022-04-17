import express from "express";
import dotenv from "dotenv";

//Database
import connectDB from "./db/connect.js";

//routers
import authRouter from "./routes/authRoutes.js";

//middlewares
import errorHandlerMidleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

const app = express();

dotenv.config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("wellcome");
});

//routes:
app.use("/api/v1/auth", authRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMidleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    throw new Error(error, "DB connection failed");
  }
};

start();
