import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ResultDto } from './dto/result.dto';
import { UserCreateDTO } from './dto/user.create.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async listar(): Promise<User[]> {
    return this.userRepository.find();
  }

  async cadastrar({ data }: { data: UserCreateDTO; }): Promise<ResultDto>{
    let user = new User()

    user.name = data.name
    user.email = data.email
    user.password = data.password
    user.cpf = data.cpf
    user.phone = data.phone
   

    return this.userRepository.save(user)
    .then((_result) => {
        return <ResultDto>{
            status: true,
            mensagem: "Usuário cadastrado com sucesso"
          }
      })
    .catch ((_error) => {
      return <ResultDto>{
        status: false,
        mensagem: "Houve um erro ao cadastrar o usuário"
      }
    })
  }

/*  async findOne(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({email: email});
  }
  */
}