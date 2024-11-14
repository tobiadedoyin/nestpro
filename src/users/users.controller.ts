import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Patch,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UpdateUser } from './dtos/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  getSome(
    @Param('id', new DefaultValuePipe(1), ParseIntPipe) id: number,
    @Query() query: any,
  ): number {
    console.log(id, query);
    return this.userService.getSome();
  }

  @Post()
  createUser(@Body() user: CreateUserDTO) {
    console.log(typeof user, user instanceof CreateUserDTO);
    return user;
  }

  @Patch('/:id')
  updateUser(@Param() id: number, @Body() user: UpdateUser) {
    console.log(id, user);
    return user;
  }
}
