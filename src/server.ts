import express from "express"
import { fromNodeHeaders, toNodeHandler } from "better-auth/node";
import dotenv from "dotenv";
import { auth } from "./lib/auth";
import cors from "cors";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

app.all("/api/auth/*splat", toNodeHandler(auth));
app.use(express.json());

app.get("/api/me", async (req, res) => {
 	const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });
	return res.json(session);
});

app.get("/health", (req, res) => {
  res.send("Health check passed!");
});

app.listen(process.env.PORT || 3005, () => {
  console.log(`Server is running on port http://localhost:${process.env.PORT || 3005}`);
})