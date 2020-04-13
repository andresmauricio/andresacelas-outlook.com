import express from "express";
import cors from "cors";
import morgan from "morgan";
import AuthRoutes from "./routes/auth.routes";
import SpecialRoutes from "./routes/special.routes";
import passport from "passport";
import passportMiddeware from "./middlewares/passport";

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
passport.use(passportMiddeware)

// Routes
app.use('/api/users/auth', AuthRoutes);
app.use('/api/admin/credit', SpecialRoutes);


export default app;
