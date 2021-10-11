import Specification from '../entities/Specification';

interface ICreateSpecificationDTO {
  description: string;
  name: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
  list(): Specification[];
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
