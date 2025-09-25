import { Body, Controller, Inject, Post } from '@nestjs/common';
import { V1_USER } from '../route';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserUseCase } from 'src/user/application';
import { CreateUserDto } from './create-user.dto';

@Controller(V1_USER)
@ApiTags('User')
export class CreateUserController {
  constructor(
    @Inject('CreateUserUseCase')
    private readonly createUserUseCase: CreateUserUseCase,
  ) {}

  @Post()
  async run(@Body() dto: CreateUserDto) {
    return await this.createUserUseCase.run(dto);
  }
}
