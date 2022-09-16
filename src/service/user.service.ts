import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from "mongoose"
import { CreateUserDto } from 'src/dto/user/create-user-dto';

import {User, UserDocument, UserSchema} from "../schema/user.schema"

@Injectable()
export class UserService {

  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  allUsers() {
    return this.userModel.find();
  }

  findOneById(id: string){
    return this.userModel.findById(id);
  }

  createUser(createUser : CreateUserDto){
    const newUser = new this.userModel(createUser);
    return newUser.save()
  }

  deleteUserById(id: string){
    return this.userModel.findByIdAndRemove(id);
  }

  updateUserById(id: string, updateUser : CreateUserDto){
    return this.userModel.findByIdAndUpdate(id,
      {
          $set: updateUser
      }, 
      {
        new: true
      }
    )
  }
}
