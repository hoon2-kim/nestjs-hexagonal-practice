import { UserEntity } from '../domain/user.entitiy';
import { UserRepository } from '../domain/user.repository';

export class GetAllUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async run(): Promise<UserEntity[]> {
    return await this.repository.getAllUsers();
  }
}
