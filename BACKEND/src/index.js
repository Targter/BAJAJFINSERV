import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });
try {
  const PORT = process.env.PORT || 8080;
  app.get("/",(req,res)=>{
    res.json({message:"Abhay_22BCS15306 SERVER IS RUNNING"})
  });
  app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`);
  });
} catch (error) {
  console.error("Error starting the server:", error);
}
