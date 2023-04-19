import express from "express";
import cors from "cors";
import config from "./config/index.js";
import connectDb from "./config/db.js";
import router from "./routes/indexRoutes.js";
import requestLogger from "./utilities/reqLogger.js";

const app = express();

const port = config.PORT || 6000;


app.use(cors());
app.use(express.json());
app.use(requestLogger);
app.use("/api", router);


app.get("/", (req, res) =>{
  res.send("welcome to homepage");
});

app.listen(port, async ()=>{
  await connectDb();
  console.log(`App is listening on ${port}`);
});


export default app;
