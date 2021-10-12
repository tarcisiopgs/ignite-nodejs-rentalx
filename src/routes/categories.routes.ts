import { Router } from 'express';
import multer from 'multer';
import { container } from 'tsyringe';

import CreateCategoryController from '../modules/cars/useCases/createCategory/CreateCategoryController';
import ImportCategoriesController from '../modules/cars/useCases/importCategories/ImportCategoriesController';
import ListCategoriesController from '../modules/cars/useCases/listCategories/ListCategoriesController';

const categoriesRoutes = Router();
const upload = multer({ dest: './tmp' });
const createCategoryController = container.resolve(CreateCategoryController);
const importCategoriesController = container.resolve(
  ImportCategoriesController
);
const listCategoriesController = container.resolve(ListCategoriesController);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  importCategoriesController.handle
);

export default categoriesRoutes;
