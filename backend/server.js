const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json()); // support json encoded boies
app.use(express.urlencoded({ extended: true })); // support encoded bodies
app.use(cors());

// redirect to auth routes
app.use("/api/test", require("./routes/index"));


// const PORT = process.env.PORT || 5000;
const PORT = 5000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged error: ${err}`);
    server.close(() => {
      process.exit(1);
    });
  });