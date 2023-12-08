import { Body, Controller, Get, Post } from '@nestjs/common';
import { AptoService } from './apto.service';
import { Apto } from './apto.entity';
import { AptoCreateDTO } from './dto/apto.create.dto';
import { ResultDto } from './dto/result.dto';

@Controller('apto')
export class AptoController {
  constructor(private readonly AptoService: AptoService) {}

@Get('listar') 
async listar(): Promise<Apto[]>{
    return this.AptoService.listar()
}

@Post('cadastrar')
async cadastrar(@Body()data: AptoCreateDTO): Promise<ResultDto>{

    return this.AptoService.cadastrar(data)
 
}
}