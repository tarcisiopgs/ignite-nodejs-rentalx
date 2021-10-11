import Specification from '../../entities/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationsRepository implements ISpecificationsRepository {
  private static instance: SpecificationsRepository;

  private constructor(private specifications: Specification[] = []) {}

  public static getInstance(): SpecificationsRepository {
    if (!SpecificationsRepository.instance) {
      SpecificationsRepository.instance = new SpecificationsRepository();
    }

    return SpecificationsRepository.instance;
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specification = new Specification();

    Object.assign(specification, { name, description, created_at: new Date() });

    this.specifications.push(specification);
  }

  list(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );

    return specification;
  }
}

export default SpecificationsRepository;
