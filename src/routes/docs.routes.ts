import { Router } from 'express';
import { serve, setup } from 'swagger-ui-express';

import swaggerConfig from '../../assets/swagger.json';

const docsRoutes = Router();

docsRoutes.use(serve, setup(swaggerConfig));

export default docsRoutes;
