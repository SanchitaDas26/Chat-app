const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    uri=new URL(process.env.MONGO_URI);
    const conn = await mongoose.connect(uri.toString(), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;