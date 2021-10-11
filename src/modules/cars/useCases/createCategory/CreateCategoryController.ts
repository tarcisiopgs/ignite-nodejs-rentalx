import { Request, Response } from 'express';

import CreateCategoryUseCase from './CreateCategoryUseCase';

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      body: { name, description },
    } = request;

    await this.createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export default CreateCategoryController;
