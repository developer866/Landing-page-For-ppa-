import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: { type: String, Required: true },
  email: { type: String, require: true },
  authentication: {
    password: {
      type: String,
      require: true,
      select: false,
    },
    salt: {
      type: String,
      select: false,
    },
    sessionToken: {
      type: String,
      select: false,
    },
  },
});


export const UserModel = mongoose.model("user",UserSchema)

export const tgetUsers =()=> UserModel.find();
export const getUserbyEmail = (email:String) => UserModel.findOne({email})
export const getUserbySessionToken = (sessionToken:string)=> UserModel.findOne({
    "authentication.sessionToken":sessionToken,
})

export const getUserById = (id:string) => UserModel.findById(id);
export const createUser = (values:Record<string,any>)=>new UserModel(values).save().then((user)=> user.toObject());
export const deleteUserByID = (id:string) =>UserModel.findOneAndDelete({_id:id})
export const updateUSerByID = (id:string,values:Record<string,any>) => UserModel.findByIdAndUpdate(id,values)