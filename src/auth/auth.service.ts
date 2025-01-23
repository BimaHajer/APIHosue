import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { response } from 'express';
import { jwtConstants } from 'src/user/constants';
import { LoginUser } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
const bcrypt=require('bcrypt')

@Injectable()
export class AuthService {
    constructor(private userService:UserService ,  private jwtService:JwtService) {}
// fonction qui permet de verifier si lutilisateur existe
    async valideUser(user:LoginUser){
        let userExist= await this.userService.findByEmail(user.email)
        if (userExist){
            const isPasswordMatch =  await  bcrypt.compare(user.password,userExist.password);
        
            if(isPasswordMatch){
                return userExist
            }else{
                return null
            } 
        }else{
            return null
        }
       
    }
// fonction qui permet de login  lutilisateur
async userLogin(loginUser: LoginUser) {
  
 let userObject= await this.valideUser(loginUser)  

if( userObject) {
    const payload={role:userObject.role,id:userObject.id, email:userObject.email,data:userObject.DateCreateAT}

    return { 
    access_token: this.jwtService.sign(payload, { secret: jwtConstants.secret })    ,
    userObject:userObject
}
  

}
else{
    
        return response.status(400).json({message:" user not exist"})

}


}
}

