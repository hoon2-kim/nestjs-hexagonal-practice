import { Injectable, Logger } from '@nestjs/common';
import { prisma } from 'src/data';
import { CreateUserDto } from 'src/user/domain/create-user.dto';
import { UpdateUserDto } from 'src/user/domain/update-user.dto';
import { UserEntity } from 'src/user/domain/user.entitiy';
import { UserRepository } from 'src/user/domain/user.repository';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  private readonly logger = new Logger('UserRepositoryImpl');

  async getUserById(id: number): Promise<UserEntity | null> {
    try {
      const user = await prisma.user.findUnique({
        where: { id },
      });

      if (!user) {
        return null;
      }

      return UserEntity.fromPrisma(user);
    } catch (error) {
      this.logger.error('Failed to findOne users', error);
      throw new Error('오류');
    }
  }

  async createUser(dto: CreateUserDto): Promise<UserEntity> {
    try {
      const user = UserEntity.create(dto);

      const newUser = await prisma.user.create({
        data: {
          email: user.email,
          name: user.name,
          lastName: user.lastName,
        },
      });

      return UserEntity.fromPrisma(newUser);
    } catch (error) {
      this.logger.error('Failed to create user', error);
      // 오류 처리쪽은 내가 알아보고 처리
      throw new Error('오류');
    }
  }

  async getAllUsers(): Promise<UserEntity[]> {
    try {
      const users = await prisma.user.findMany();

      return users.map((u) => UserEntity.fromPrisma(u));
    } catch (error) {
      this.logger.error('Failed to findMany users', error);
      throw new Error('오류');
    }
  }

  async updateUser(id: number, dto: UpdateUserDto): Promise<UserEntity> {
    try {
      // 이 부분 도메인 규칙은 도메인 계층에서 처리
      //
      const user = await this.getUserById(id);

      if (!user) {
        throw new Error('Not found user');
      }
      //

      const newUser = await prisma.user.update({
        where: {
          id,
        },
        data: dto,
      });

      return UserEntity.fromPrisma(newUser);
    } catch (error) {
      this.logger.error('Failed to update user', error);
      throw new Error('오류');
    }
  }

  async deleteUser(id: number): Promise<void> {
    try {
      await prisma.user.delete({
        where: { id },
      });
    } catch (error) {
      this.logger.error('Failed to delete users', error);
      throw new Error('오류');
    }
  }

  //   async getUserById(id: number): Promise<UserEntity | null> {
  //     try {
  //       const user = await prisma.user.findUnique({
  //         where: { id },
  //       });

  //       if (!user) {
  //         return null; // ✅ null 반환, 비즈니스 로직은 상위에서 처리
  //       }

  //       return UserEntity.fromPrisma(user);
  //     } catch (error) {
  //       this.logger.error('Failed to get user by id', error);
  //       throw new Error('오류');
  //     }
  //   }
}

// ✅ Repository: "데이터를 어떻게 저장/조회할까?"
// ✅ Use Case: "비즈니스 규칙은 무엇인가?"
// ✅ Domain: "도메인 규칙은 무엇인가?"
