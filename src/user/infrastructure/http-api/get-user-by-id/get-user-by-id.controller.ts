import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { V1_USER } from '../route';
import { ApiTags } from '@nestjs/swagger';
import { GetUserByIdUseCase } from 'src/user/application';

@Controller(V1_USER)
@ApiTags('User')
export class GetUserByIdController {
  constructor(
    @Inject('GetUserByIdUseCase')
    private readonly getUserByIdUseCase: GetUserByIdUseCase,
  ) {}

  @Get(':id')
  async run(@Param('id', ParseIntPipe) id: number) {
    return await this.getUserByIdUseCase.run(id);
  }
}
