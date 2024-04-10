const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors"); // Import cors
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/post");
const categoriesRoute = require("./routes/categories");
const multer = require("multer");
const path = require("path");
app.use(express.json());
app.use(cors()); // Use cors middleware

const axios = require("axios");


app.get("/", async (req, res) => {
  // const axios = require("axios");

  // const options = {
  //   method: "GET",
  //   url: "https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels",
  //   params: {
  //     dest_id: "-2092174",
  //     search_type: "CITY",
  //     arrival_date: "<REQUIRED>",
  //     departure_date: "<REQUIRED>",
  //     adults: "1",
  //     children_age: "0,17",
  //     room_qty: "1",
  //     page_number: "1",
  //     languagecode: "en-us",
  //     currency_code: "AED",
  //   },
  //   headers: {
  //     "X-RapidAPI-Key": "fabeeec9d5mshe5dccb93c22a067p1a21cbjsn785507b695c1",
  //     "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
  //   },
  // };

  // try {
  //   const response = await axios.request(options);
  //   res.json(response);
  //   console.log(res);
  // } catch (error) {
  //   console.error(error);
  // }

  console.log("ansdn")
});

app.use("/images", express.static(path.join(__dirname, "images")));

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error(err);
  });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});



const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/post", postRoute);
app.use("/api/categories", categoriesRoute);
app.listen(5000, () => {
  console.log("Backend is working. Listening on port 5000");
});
