interface ICreateUserDTO {
  description: string;
  username: string;
  password: string;
  email: string;
  name: string;
}

interface ICategoriesRepository {
  create({ name, description }: ICreateUserDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateUserDTO };
