const controlRoute = require("./routes/control")
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const cors = require('cors');
app.use(cors());

dotenv.config();
mongoose
    .connect(process.env.MONGO_URL)
    .then(()=>console.log("DBconnnection succesfull!"))
    .catch((err)=>{
        console.log(err);
    });

app.use(express.json());
app.use("/api/control", controlRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Backend server is running! ${PORT}`);
});