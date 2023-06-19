const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dashboardRoutes = require("./routes/dashboardRoutes");
const authRoutes = require("./routes/authRoutes")

const routes = require("./routes/dashboardRoutes")

async function main() {
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/CRM_WEB");
      console.log('db connected');
    } catch (error) {
      console.error('Error connecting to the database:', error);
    }
  }
  
  main().catch(console.error);
  

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

// Routes
app.use("/",authRoutes)
app.use("/dashboard", dashboardRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
