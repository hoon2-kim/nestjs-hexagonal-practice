import { UserRepository } from '../domain/user.repository';

export class DeleteUserUseCase {
  constructor(private readonly repository: UserRepository) {}

  async run(id: number): Promise<void> {
    return await this.repository.deleteUser(id);
  }
}
