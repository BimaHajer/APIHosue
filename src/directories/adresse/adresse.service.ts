import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Adresse } from './entities/adresse.entity';
import { CreateAdresseDto } from './dto/create-adresse.dto';
import { UpdateAdresseDto } from './dto/update-adresse.dto';

@Injectable()
export class AdresseService {

  constructor(
    @InjectRepository(Adresse)
    private readonly adresseRepository: Repository<Adresse>,
  ) {}

  async create(adresseData: CreateAdresseDto) {
    let adresse =  await this.adresseRepository.create(adresseData);
    console.log(adresse)
    return this.adresseRepository.save(adresse)  }

  async findAll() {
    return  this.adresseRepository.findAndCount();
  }

  async findOne(id: number){
    return await this.adresseRepository.findOne({ where: { id } });
  }

  async update(id: number, updateAdresseDto:UpdateAdresseDto) {
    let adresse = await this.adresseRepository.preload({
      id:+id,
      ...updateAdresseDto
    })
   return this.adresseRepository.save(adresse)
  }
  delete(id: number) {
    this.adresseRepository.delete(id)
  }
    
 
  
}
