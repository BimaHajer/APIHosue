import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CharacteristicService } from './characteristic.service';
import { CreateCharacteristicDto } from './dto/create-characteristic.dto';
import { UpdateCharacteristicDto } from './dto/update-characteristic.dto';

@Controller('characteristic')
export class CharacteristicController {
  constructor(private readonly characteristicService: CharacteristicService) {}

  @Post('Characteristic')
  create(@Body() createCharacteristicDto: CreateCharacteristicDto) {
    return this.characteristicService.create(createCharacteristicDto);
  }

  @Get('create-Characteristic')
  findAll() {
    return this.characteristicService.findAll();
  }

  @Get('Characteristic/:id')
  findOne(@Param('id') id: number) {
    return this.characteristicService.findOne(id);
  }

  @Patch('update-Characteristic/:id')
  update(@Param('id') id: number, @Body() updateCharacteristicDto: UpdateCharacteristicDto) {
    return this.characteristicService.update(id, updateCharacteristicDto);
  }

  @Delete('delete-Characteristic/:id')
  remove(@Param('id') id: number) {
    return this.characteristicService.delete(id);
  }
}
