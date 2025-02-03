import { Module } from '@nestjs/common';
import { EquipementService } from './equipement.service';
import { EquipementController } from './equipement.controller';
import { Equipement } from './entities/equipement.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [EquipementController],
  providers: [EquipementService],
  exports: [EquipementService],
  imports:[TypeOrmModule.forFeature([Equipement])]
})
export class EquipementModule {}
