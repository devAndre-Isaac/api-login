import { UserInterface } from "../interfaces/user";
import * as repository from "../repositories/user";

export const create = async (
  userBody: UserInterface
): Promise<UserInterface> => {
  return repository.create(userBody);
};
