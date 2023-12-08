import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { UserCreateDTO } from './dto/user.create.dto';
import { ResultDto } from './dto/result.dto';

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

@Get('listar') 
async listar(): Promise<User[]>{
    return this.UserService.listar()
}

@Post('cadastrar')
async cadastrar(@Body()data: UserCreateDTO): Promise<ResultDto>{

    return this.UserService.cadastrar(data)
 
}
}