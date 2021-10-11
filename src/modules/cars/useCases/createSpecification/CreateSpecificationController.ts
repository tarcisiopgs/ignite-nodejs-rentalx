import { Request, Response } from 'express';

import CreateSpecificationUseCase from './CreateSpecificationUseCase';

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      body: { name, description },
    } = request;

    await this.createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export default CreateSpecificationController;
