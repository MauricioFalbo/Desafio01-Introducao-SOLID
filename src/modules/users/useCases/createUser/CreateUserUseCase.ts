import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const existAlreadyUser = this.usersRepository.findByEmail(email);

    if (existAlreadyUser) throw new Error("Mensagem do erro");

    const user = this.usersRepository.create({ name, email });
    return user;
  }
}

export { CreateUserUseCase };
