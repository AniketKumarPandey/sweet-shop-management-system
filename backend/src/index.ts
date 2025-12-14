import app from "./app";
import connectDB from "./config/db";


const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "test") {
  connectDB()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    })
   .catch((err: unknown) => {
  console.error("Failed to start server", err);
});

}
