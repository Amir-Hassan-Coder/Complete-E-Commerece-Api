import UserModel from "../models/User.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const registerUser =async (req,res)=>{
    try {
        const {name,email,password} = req.body;
    let  user = await UserModel.findOne({email});
    if (user) {
        return res.status(400).json({
            message:"this user is already exits",
            succes:false
        });
    }
  
     let hasshedPassoword = await bcrypt.hash(password,10);

      const newUser =  await UserModel.create({
        name,
        email,
        password:hasshedPassoword
       });

       res.status(200).json({
        message:"User Register Succsesfully ",
        newUser,
        succes:true
       })

    } catch (error) {
        res.status(400).json({
            message:error.message
        });
    }
}


// user login api 

export const userLogin = async (req,res)=>{
  try {
    const {email , password} = req.body;
    const user = await UserModel.findOne({email});

    if(!user) return res.json({message:"user is not exsits" , succes:false});

    const validpass = bcrypt.compare(password , user.password);
    if(!validpass) return res.json({message:"Invalid Password " , succes:false});

    const token = jwt.sign(
        {userId:user._id},
        process.env.JWT_SECRET,
        {expiresIn:'1d'}
    );

    res.status(200).json({
        messageF:`User login Succsesfully `,
        mdata:`Wellcome to my website ${user.name}`,
        token
    })
     
  } catch (error) {
      res.status(400).json({
            message:error.message
        });
  }

}