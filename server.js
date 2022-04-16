import express from "express";
import errorHandlerMidleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";

const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send("wellcome");
});

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
