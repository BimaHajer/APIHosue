import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { response } from 'express';
import { LoginLessor } from 'src/lessor/dto/create-lessor.dto';
import { LessorService } from 'src/lessor/lessor.service';
import { LoginClient } from 'src/client/dto/create-client.dto';
import { jwtConstants } from 'src/user/constants';
import { LoginUser } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { ClientService } from 'src/client/client.service';
const bcrypt=require('bcrypt')

@Injectable()
export class AuthService {
  
    constructor(private userService:UserService ,  private jwtService:JwtService, private lessorService:LessorService ,private clientService:ClientService) {}
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
    //pour client
    async valideclient(client:LoginClient){
        let clientExist= await this.clientService.findByEmail(client.email)
        if (clientExist){
            const isPasswordMatch =  await  bcrypt.compare(client.password,clientExist.password);
        
            if(isPasswordMatch){
                return clientExist
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
// fonction qui permet de verifier si le bailleur existe
async valideLessor(lessor:LoginLessor){
    let lessorExist= await this.lessorService.findByEmail(lessor.email)
    if (lessorExist){
        const isPasswordMatch =  await  bcrypt.compare(lessor.password,lessorExist.password);
    
        if(isPasswordMatch){
            return lessorExist
        }else{
            return null
        } 
    }else{
        return null
    }
}
// fonction qui permet de connecter le bailleur
    async lessorLogin(loginLessor: LoginUser) {
    let lessorObject= await this.valideLessor(loginLessor) 
    if(lessorObject) {
        const payload={id:lessorObject.id, email:lessorObject.email}
    
        return { 
        access_token: this.jwtService.sign(payload, { secret: jwtConstants.secret })    ,
        lessorObject:lessorObject
    }
      
    
    }
    else{
        
            return response.status(400).json({message:" lessor not exist"})
    
    }
    
    
    }

//client
async clientLogin(loginClient: LoginUser) {
  
    let clientObject= await this.valideclient(loginClient)  
   
   if( clientObject) {
       const payload={id:clientObject.id, email:clientObject.email,data:clientObject.DateCreateAT}
   
       return { 
       access_token: this.jwtService.sign(payload, { secret: jwtConstants.secret })    ,
       clientObject:clientObject
   }
     
   
   }
   else{
       
           return response.status(400).json({message:" client not exist"})
   
   }
   
   
   }
}


