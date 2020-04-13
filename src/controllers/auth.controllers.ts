import { Request, Response } from "express";
import User, { IUser } from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config/config";


function createToken(user: IUser) {
    return jwt.sign({id: user.id, email: user.email}, config.jwt, {
        expiresIn: 86400
    });
}

export const singUp = async (req: Request, res: Response): Promise<Response> => {
  const { password, email } = req.body;
  if (!password || !email) return res.status(400).send(false);

  const userExistis = await User.findOne({ email: email });  
  if (userExistis) return res.status(400).json("El usuario ya existe");

  const newUser = new User(req.body);
  await newUser.save();
  return res.status(201).json(newUser);
};

export const singIn = async (req: Request, res: Response): Promise<Response> => {
    const { password, email } = req.body;
    if (!password || !email) return res.status(400).send(false);

    const user = await User.findOne({email: email});
    if (!user) return res.status(404).json("User not exists");

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json("No se puede iniciar sesión con las credenciales");

    return res.status(200).json({token: createToken(user)});
}
