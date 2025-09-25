import { Module } from '@nestjs/common';
import { UserRepositoryImpl } from './infrastructure/repository/user.repository.impl';

// Use Cases
import {
  CreateUserUseCase,
  DeleteUserUseCase,
  GetAllUserUseCase,
  GetUserByIdUseCase,
  UpdateUserUseCase,
} from './application';
import {
  CreateUserController,
  GetAllUserController,
} from './infrastructure/http-api';

@Module({
  imports: [],
  controllers: [CreateUserController, GetAllUserController],
  providers: [
    {
      provide: 'UserRepositoryImpl',
      useClass: UserRepositoryImpl,
    },
    {
      provide: 'CreateUserUseCase',
      useFactory: (repository: UserRepositoryImpl) =>
        new CreateUserUseCase(repository),
      inject: ['UserRepositoryImpl'],
    },
    {
      provide: 'UpdateUserUseCase',
      useFactory: (repository: UserRepositoryImpl) =>
        new UpdateUserUseCase(repository),
      inject: ['UserRepositoryImpl'],
    },
    {
      provide: 'DeleteUserUseCase',
      useFactory: (repository: UserRepositoryImpl) =>
        new DeleteUserUseCase(repository),
      inject: ['UserRepositoryImpl'],
    },
    {
      provide: 'GetAllUserUseCase',
      useFactory: (repository: UserRepositoryImpl) =>
        new GetAllUserUseCase(repository),
      inject: ['UserRepositoryImpl'],
    },
    {
      provide: 'GetUserByIdUseCase',
      useFactory: (repository: UserRepositoryImpl) =>
        new GetUserByIdUseCase(repository),
      inject: ['UserRepositoryImpl'],
    },
  ],
})
export class UserModule {}
