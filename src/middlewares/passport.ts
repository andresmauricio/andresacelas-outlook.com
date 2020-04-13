import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import config from "../config/config";
import User from "../models/User";

const options: StrategyOptions = {
    jwtFromRequest:  ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwt
};


export default new Strategy(options, async (paylaod, done) => {
    const user = await User.findById(paylaod.id);
    if (!user) return done(null, false);
    
    return done(null, user)
})