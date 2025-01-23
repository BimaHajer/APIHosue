import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, LoginUser } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/authGurde';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post("create-user")
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
  @UseGuards(AuthGuard)
  @Get("list-users")
  findAll() {
    return this.userService.findAll();
  }
  @UseGuards(AuthGuard)
  @Get('user/:id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Patch('update-user/:id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete('delete-user/:id')
  remove(@Param('id') id: number) {
    return this.userService.remove(id);
  }
}
