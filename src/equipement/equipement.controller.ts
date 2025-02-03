import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EquipementService } from './equipement.service';
import { CreateEquipementDto } from './dto/create-equipement.dto';
import { UpdateEquipementDto } from './dto/update-equipement.dto';

@Controller('equipement')
export class EquipementController {
  constructor(private readonly equipementService: EquipementService) {}

  @Post('create-equipement')
  create(@Body() createEquipementDto: CreateEquipementDto) {
    return this.equipementService.create(createEquipementDto);
  }

  @Get('list-equipement')
  findAll() {
    return this.equipementService.findAll();
  }

  @Get('detail-equipement/:id')
  findOne(@Param('id') id: number) {
    return this.equipementService.findOne(id); 
  }

  @Patch('update-equipement/:id')
  update(@Param('id') id: number, @Body() updateEquipementDto: UpdateEquipementDto) {
    return this.equipementService.update(id, updateEquipementDto); 
  }

  @Delete('delete-equipement/:id')
  delete(@Param('id') id: number) {
    return this.equipementService.delete(id); 
  }
}
