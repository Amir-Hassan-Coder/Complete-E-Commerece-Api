import jwt from 'jsonwebtoken'
import UserModel from '../models/User.js'

export const isAuthenticated = async(req,resizeBy,next)=>{
    const token = req.header('Auth')

    if (!token) {
        return resizeBy.json({
            message:"plz Login First"
        });
    }

    const decode = jwt.verify(token,process.env.JWT_SECRET);

    const id = decode.userId;
    let user = await UserModel.findById(id);

    if (!user) {
        return res.json({
            message:"user is not found"
        });
    }

    req.user = user;
    next();
}