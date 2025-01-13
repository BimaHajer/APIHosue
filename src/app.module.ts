import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
    useFactory: () => ({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'ApiHouse',
      autoLoadEntities: true,
      synchronize: true,
        //  synchronize: false

        
    }),
  }),ConfigModule.forRoot(),UserModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
