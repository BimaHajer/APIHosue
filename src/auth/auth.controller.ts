import { Body, Controller, HttpStatus, Post ,Res} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUser } from 'src/user/dto/create-user.dto';
import { LoginLessor } from 'src/lessor/dto/create-lessor.dto';

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
     lessorLogin(@Body() loginLessor: LoginLessor) {
      console.log(" controller",loginLessor)
       return this.authService.lessorLogin(loginLessor);
     }
}
