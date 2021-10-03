import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;
      const id = user_id.toString();

      const user = this.listAllUsersUseCase.execute({ user_id: id });

      return response.json(user);
    } catch (error) {
      return response.status(400).send({ error });
    }
  }
}

export { ListAllUsersController };
