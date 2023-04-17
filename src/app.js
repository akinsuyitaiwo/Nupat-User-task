import express from "express";
import cors from "cors";
import config from "./config/index.js";
import connectDb from "./config/db.js";

const app = express();

const port = config.PORT || 6000;


app.use(cors());
app.use(express.json());
// app.use('/api', router)


app.get("/", (req, res) =>{
  res.send("welcome to homepage");
});

app.listen(port, async ()=>{
  await connectDb();
});

export default app;
