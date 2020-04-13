import { Router } from "express";
import passport from "passport";
const app = Router();

app.get("/", passport.authenticate("jwt", {session: false}), (req, res) => {
    res.json({
        documentNumber: 567234,
        address: "Street 45 Av 56",
        creditNumber: 1784,
        amoun: 50350980,
        total: 92839238
    })
});

export default app;
