import { UserEntity } from '../domain/user.entitiy';
import { UserRepository } from '../domain/user.repository';

export class GetUserByIdUseCase {
  constructor(private readonly repository: UserRepository) {}

  async run(id: number): Promise<UserEntity | null> {
    return await this.repository.getUserById(id);
  }
}
