import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ResultDto } from './dto/result.dto';
import { AptoCreateDTO } from './dto/apto.create.dto';
import { Apto } from './apto.entity';

@Injectable()
export class AptoService {
  constructor(
    @Inject('APTO_REPOSITORY')
    private aptoRepository: Repository<Apto>,
  ) {}

  async listar(): Promise<Apto[]> {
    return this.aptoRepository.find();
  }

  async cadastrar(data: AptoCreateDTO): Promise<ResultDto>{
    let apto = new Apto()


    apto.userId = data.userId
    apto.aptoNumber = data.aptoNumber
  
   

    return this.aptoRepository.save(apto)
    .then((_result) => {
        return <ResultDto>{
            status: true,
            mensagem: "Apartamento cadastrado com sucesso"
          }
      })
    .catch ((_error) => {
      return <ResultDto>{
        status: false,
        mensagem: "Houve um erro ao cadastrar o apartamento"
      }
    })
  }


}