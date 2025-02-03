import { Injectable } from '@nestjs/common';
import { CreateTypeHouseDto } from './dto/create-type_house.dto';
import { UpdateTypeHouseDto } from './dto/update-type_house.dto';
import { TypeHouse } from './entities/type_house.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class TypeHouseService {
  constructor(
          @InjectRepository(TypeHouse)
          private readonly TypeHouseRepository: Repository<TypeHouse>,
      ) {}
  
      async create(TypeHouseData: CreateTypeHouseDto) {
          const newtypeHouse =  await this.TypeHouseRepository.create(TypeHouseData);
          return await this.TypeHouseRepository.save(newtypeHouse);
      }
  
      // Récupérer 
      async findAll(){
          return await this.TypeHouseRepository.find();
      }
  
      // Récupérer  par ID
      async findOne(id: number){
          return await this.TypeHouseRepository.findOne({ where: { id } });
      }
  
      // Mettre à jour
      async update(id: number,updateCypeHouseDto:UpdateTypeHouseDto) {
        let TypeHouse= await this.TypeHouseRepository.preload({
          id:+id,
          ...updateCypeHouseDto
        })
        return this.TypeHouseRepository.save(TypeHouse)
      }
      // Supprimer
      async delete(id: number){
          await this.TypeHouseRepository.delete(id); 
      }
 }