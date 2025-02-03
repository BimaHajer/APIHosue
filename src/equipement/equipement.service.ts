import { Injectable } from '@nestjs/common';
import { CreateEquipementDto } from './dto/create-equipement.dto';
import { UpdateEquipementDto } from './dto/update-equipement.dto';
import { Equipement } from './entities/equipement.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EquipementService {
   constructor(
      @InjectRepository(Equipement)
      private readonly equipementRepository: Repository<Equipement>,
    ) {}
  
    async create(equipementData: CreateEquipementDto) {
      let equipement =  await this.equipementRepository.create(equipementData);
      console.log(equipement)
      return this.equipementRepository.save(equipement)  }
  
    async findAll() {
      return  this.equipementRepository.findAndCount();
    }
  
    async findOne(id: number){
      return await this.equipementRepository.findOne({ where: { id } });
    }
  
    async update(id: number, updateEquipementDto:UpdateEquipementDto) {
      let equipement = await this.equipementRepository.preload({
        id:+id,
        ...UpdateEquipementDto
      })
     return this.equipementRepository.save(equipement)
    }
    delete(id: number) {
      this.equipementRepository.delete(id)
    }
      
   
    
  }
  