import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypeHouseService } from './type_house.service';
import { CreateTypeHouseDto } from './dto/create-type_house.dto';
import { UpdateTypeHouseDto } from './dto/update-type_house.dto';

@Controller('type-house')
export class TypeHouseController {
  constructor(private readonly typeHouseService: TypeHouseService) {}

  @Post('create-typehouse')
  create(@Body() createTypeHouseDto: CreateTypeHouseDto) {
    console.log("TypeouseData",createTypeHouseDto)
    return this.typeHouseService.create(createTypeHouseDto);
  }

  @Get('list-Typehouse')
  findAll() {
    return this.typeHouseService.findAll();
  }

  @Get('detail-typeHouse/:id')
  findOne(@Param('id') id: number) {
    return this.typeHouseService.findOne(id);
  }

  @Patch('update-TypeHouse/:id')
  update(@Param('id') id: number, @Body() updateTypeHouseDto: UpdateTypeHouseDto) {
    return this.typeHouseService.update(id, updateTypeHouseDto);
  }

  @Delete('delete-TypeHouse/:id')
  remove(@Param('id') id: number) {
    return this.typeHouseService.delete(id);
  }
}
