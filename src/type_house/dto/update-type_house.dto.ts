import { PartialType } from '@nestjs/swagger';
import { CreateTypeHouseDto } from './create-type_house.dto';

export class UpdateTypeHouseDto extends PartialType(CreateTypeHouseDto) {}
