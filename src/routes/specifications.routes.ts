import { Router } from 'express';
import { container } from 'tsyringe';

import CreateSpecificationController from '../modules/cars/useCases/createSpecification/CreateSpecificationController';
import ListSpecificationsController from '../modules/cars/useCases/listSpecifications/ListSpecificationsController';

const specificationsRoutes = Router();
const createSpecificationController = container.resolve(
  CreateSpecificationController
);
const listSpecificationsController = container.resolve(
  ListSpecificationsController
);

specificationsRoutes.get('/', listSpecificationsController.handle);

specificationsRoutes.post('/', createSpecificationController.handle);

export default specificationsRoutes;
