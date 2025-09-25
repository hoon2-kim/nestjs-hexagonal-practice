import { Controller, Get, Inject } from '@nestjs/common';
import { V1_USER } from '../route';
import { ApiTags } from '@nestjs/swagger';
import { GetAllUserUseCase } from 'src/user/application';

@Controller(V1_USER)
@ApiTags('User')
export class GetAllUserController {
  constructor(
    @Inject('GetAllUserUseCase')
    private readonly getAllUserUseCase: GetAllUserUseCase,
  ) {}

  @Get()
  async run() {
    return await this.getAllUserUseCase.run();
  }
}
