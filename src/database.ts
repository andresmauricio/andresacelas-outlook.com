import mongoose from "mongoose";
import config from "./config/config";

mongoose
  .connect(config.DB.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(db => {
    console.log("DATABASE CONECTED");
  })
  .catch(err => console.log("ERROR ->", err));

