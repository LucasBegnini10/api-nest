import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/dto/user/create-user-dto';
import { UserService } from 'src/service/user.service';


@Controller('user')
export class UserController {
  
    constructor(private readonly userService : UserService){}

    @Get("all")
    allUsers(){
        return this.userService.allUsers();
    }

    @Get(":id")
    findOneById(@Param('id') id : string){
        return this.userService.findOneById(id);
    }

    @Post()
    createUser(
        @Body ("email") email : string, 
        @Body ("name") name : string,
        @Body ("password") password : string,
    ){
        const createUser = new CreateUserDto(name, email, password);
        return this.userService.createUser(createUser);
    }

    @Delete(":id")
    deleteById(@Param("id") id : string){
        return this.userService.deleteUserById(id);
    }

    @Put(":id")
    updateUserById(@Param("id") id : string,   
    @Body ("email") email : string, 
    @Body ("name") name : string,
    @Body ("password") password : string,){
        const user = new CreateUserDto(name, email, password);
        return this.userService.updateUserById(id, user);
    }
}
