import { Controller } from '../../../../../../packages/services/core/controller';
import { DecodedExpressRequest } from '../../../../infra/http/decodedExpressRequest';
import { CreateUserUseCase } from './createUserUseCase';
import { CreateUserDTO } from './createUserDTO';
import { Response } from 'express';

export class CreateUserController extends Controller {
  private useCase: CreateUserUseCase;

  constructor(useCase: CreateUserUseCase) {
    super();
    this.useCase = useCase;
  }

  protected async executeImpl(request: DecodedExpressRequest, response: Response): Promise<void> {
    const dto: CreateUserDTO = {
      phone: request.body.phone,
      email: request.body.email,
      password: request.body.password,
      roleId: undefined,
    };

    try {
      await this.useCase.execute(dto);
      this.sendResponse(response, 201, { message: 'User created successfully' });
    } catch (err) {
      this.handleError(response, err);
    }
  }
}