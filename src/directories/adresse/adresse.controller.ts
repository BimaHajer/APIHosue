import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdresseService } from './adresse.service';
import { CreateAdresseDto } from './dto/create-adresse.dto';
import { UpdateAdresseDto } from './dto/update-adresse.dto';

@Controller('adresse')
export class AdresseController {
  constructor(private readonly adresseService: AdresseService) {}

  @Post("create-adresse")
  create(@Body() createAdresseDto: CreateAdresseDto) {
    return this.adresseService.create(createAdresseDto);
  }

  @Get("list-adresse")
  findAll() {
    return this.adresseService.findAll();
  }

  @Get('detail-adresse/:id')
  findOne(@Param('id') id: number) {
    return this.adresseService.findOne(+id);
  }

  @Patch('update-adresse/:id')
  update(@Param('id') id: number, @Body() updateAdresseDto: UpdateAdresseDto) {
    return this.adresseService.update(+id, updateAdresseDto);
  }
  @Delete('delete-adresse/:id')
  remove(@Param('id') id: number) {
    return this.adresseService.delete(id);
  }


}
