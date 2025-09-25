import { UserEntity } from '../domain/user.entitiy';
import { UserRepository } from '../domain/user.repository';
import { UpdateUserDto } from './dtos/update-user.dto';

export class UpdateUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async run(id: number, dto: UpdateUserDto): Promise<UserEntity> {
    return await this.repository.updateUser(id, dto);
  }
}
