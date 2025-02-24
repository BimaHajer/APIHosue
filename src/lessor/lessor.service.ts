import { Injectable } from '@nestjs/common';
import { CreateLessorDto } from './dto/create-lessor.dto';
import { UpdateLessorDto } from './dto/update-lessor.dto';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Lessor } from './entities/lessor.entity';
import { Repository } from 'typeorm';



@Injectable()
export class LessorService {
   constructor(
     @InjectRepository(Lessor)
     private readonly lessorRepository:Repository<Lessor>
     ){}
 
   async create(createUserDto: CreateLessorDto) {
   let lessor=this.lessorRepository.create(createUserDto)//create object 
   console.log("lessor",lessor.password)
   lessor.password= ((await (this.hashPassword(lessor.password))).toString())// hash the password
   console.log("lessor password",lessor.password)// console.log 
   return this.lessorRepository.save(lessor)// save on database
 
 
   }
   async hashPassword(password:string){
 const saltOrRounds = 15;
 const hash = (await (bcrypt.hash(password, saltOrRounds))).toString();
 console.log("hash",hash)
 return hash
 }
   findAll() {
     return  this.lessorRepository.findAndCount()
   }
 
   findOne(idLessor: number) {
     return  this.lessorRepository.findOne({where:{id:idLessor}})
   }
 
   async update(idLessor: number, updateLessorDto: UpdateLessorDto) {
     console.log("updateLessorDto service", updateLessorDto)
     let lessor = await this.lessorRepository.preload({
       id:+idLessor,
       ...updateLessorDto
     })
 
     return this.lessorRepository.save(lessor)
   }
 
   remove(id: number) {
     return this.lessorRepository.delete(id)
   }
   async removeMultiple(toDelete: number[]) {   

    let resultDelete: boolean = null
    let resultDisable: boolean = null
    const allIntegers = toDelete.every(item => Number.isInteger(item));
if (!allIntegers) {
    console.log('Invalid data in toDelete array');
    // Handle the error appropriately
    return;
}

    if (toDelete.length != 0) {
      if (await this.lessorRepository.delete(toDelete)) {
        resultDelete = true
      } else
        resultDelete = false
        console.log("unitsResposity",this.lessorRepository)
    }

  return true 
 }
}