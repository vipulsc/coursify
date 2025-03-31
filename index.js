require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const { adminRouter } = require("./routes/admin");
const app = express();
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running ✅");
});

app.use("/api/v1/admin", adminRouter);
async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URL);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
  } catch (error) {
    console.error("Database connection failed ❌", error);
    process.exit(1);
  }
}

main();
