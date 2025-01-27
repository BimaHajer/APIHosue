
import { Body, Controller, HttpStatus, Post ,Res} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUser } from 'src/user/dto/create-user.dto';

@Controller('auth')
export class AuthController 

{
     constructor(private readonly authService: AuthService) {}
     @Post("login-user")
     login(@Body() loginUser: LoginUser) {
      console.log(" controller",loginUser)
       return this.authService.userLogin(loginUser);
     }
     @Post("login-lessor")
     lessorLogin(@Body() loginLessor: LoginUser) {
      console.log(" controller",loginLessor)
       return this.authService.lessorLogin(loginLessor);
     }
     @Post("login-client")
     LoginClient(@Body() loginClient: LoginUser) {
      console.log(" controller",loginClient)
       return this.authService.clientLogin(loginClient);
     }
}

