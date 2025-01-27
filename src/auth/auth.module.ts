import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { LessorModule } from 'src/lessor/lessor.module';
import { ClientModule } from 'src/client/client.module';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [UserModule, ClientModule,LessorModule,
      JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '600000000000000000s' },
      }

  )],
})
export class AuthModule {}
