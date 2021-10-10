import { Router } from 'express';

import categoriesRoutes from './categories.routes';
import docsRoutes from './docs.routes';
import specificationsRoutes from './specifications.routes';

const routes = Router();

routes.use('/docs', docsRoutes);
routes.use('/categories', categoriesRoutes);
routes.use('/specifications', specificationsRoutes);

export default routes;
