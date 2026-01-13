import express from "express";
import env from "dotenv";
import connectDb from "./config/db.js";
import userRouter from "./routes/user.js";
import productRouter from './routes/products.js'
import cartRouter from './routes/cart.js'
env.config();
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use("/api/user", userRouter);
app.use('/api/product' , productRouter);
app.use('/api/cart' , cartRouter);
app.get("/", (req, res) => {
  res.send("this is home page");
});
connectDb();
app.listen(port, () => {
  console.log("OUR SErver is Running On this PORt ", port);
});
