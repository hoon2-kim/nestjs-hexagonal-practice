import { UserRepository } from '../domain/user.repository';
import { CreateUserDto } from './dtos/create-user.dto';

export class CreateUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async run(dto: CreateUserDto) {
    return await this.repository.createUser(dto);
  }
}
