import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListSpecificationsUseCase from './ListSpecificationsUseCase';

class ListSpecificationsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listSpecificationsUseCase = container.resolve(
      ListSpecificationsUseCase
    );
    const data = await listSpecificationsUseCase.execute();

    return response.json(data);
  }
}

export default ListSpecificationsController;
