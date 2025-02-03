import { Injectable } from '@nestjs/common';
import { CreateCharacteristicDto } from './dto/create-characteristic.dto';
import { UpdateCharacteristicDto } from './dto/update-characteristic.dto';
import { Characteristic } from './entities/characteristic.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CharacteristicService {
  constructor(
         @InjectRepository(Characteristic)
         private readonly CharacteristicRepository: Repository<Characteristic>,
     ) {}
 
     // Créer 
     async create(CharacteristicData: Partial<Characteristic>) {
         const newCharacteristic = this.CharacteristicRepository.create(CharacteristicData);
         return await this.CharacteristicRepository.save(newCharacteristic);
     }
 
     // Récupérer 
     async findAll(){
         return await this.CharacteristicRepository.find();
     }
 
     // Récupérer  par ID
     async findOne(id: number){
         return await this.CharacteristicRepository.findOne({ where: { id } });
     }
 
     // Mettre à jour
     async update(id: number,updateCharacteristicDto:UpdateCharacteristicDto) {
       let Characteristic= await this.CharacteristicRepository.preload({
         id:+id,
         ...updateCharacteristicDto
       })
       return this.CharacteristicRepository.save(Characteristic)
     }
     // Supprimer
     async delete(id: number){
         await this.CharacteristicRepository.delete(id); 
     }
}
