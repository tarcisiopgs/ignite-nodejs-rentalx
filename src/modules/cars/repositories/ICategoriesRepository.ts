import Category from '../entities/Category';

interface ICreateCategoryDTO {
  description: string;
  name: string;
}

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void;
  findByName(name: string): Category;
  list(): Category[];
}

export { ICategoriesRepository, ICreateCategoryDTO };
