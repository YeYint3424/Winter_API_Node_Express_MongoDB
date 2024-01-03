const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const route = require("./routes/routes");

const PORT = process.env.PORT || 8080;
const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Successssss");
});
app.use("/api/v1",route)
app.get("/",(req,res)=>{
    res.sendStatus('success')
})
app.listen(PORT, () => {
  console.log("server is listening on port", PORT);
});
