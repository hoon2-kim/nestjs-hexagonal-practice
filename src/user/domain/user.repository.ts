import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { UserEntity } from './user.entitiy';

export abstract class UserRepository {
  abstract createUser(dto: CreateUserDto): Promise<UserEntity>;
  abstract getAllUsers(): Promise<UserEntity[]>;
  abstract updateUser(id: string, dto: UpdateUserDto): Promise<UserEntity>;
  abstract deleteUser(id: string): Promise<void>;
}
