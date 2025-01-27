import { Module } from '@nestjs/common';
import { AdresseService } from './adresse.service';
import { AdresseController } from './adresse.controller';
import { Adresse } from './entities/adresse.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [AdresseController],
  providers: [AdresseService],
  exports: [AdresseService],
  imports:[TypeOrmModule.forFeature([Adresse])]
})
export class AdresseModule {}
