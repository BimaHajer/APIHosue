import { Module } from '@nestjs/common';
import { TypeHouseService } from './type_house.service';
import { TypeHouseController } from './type_house.controller';
import { TypeHouse } from './entities/type_house.entity';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/user/constants';

@Module({
  controllers: [TypeHouseController],
  providers: [TypeHouseService],
    imports: [TypeOrmModule.forFeature([TypeHouse]), 
      JwtModule.register({
        global: true,
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '600000000000000000s' },
      }),],
})
export class TypeHouseModule {}
