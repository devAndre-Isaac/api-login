import { UserInterface, UserUpdateInterface } from "../interfaces/user";
import * as repository from "../repositories/user";
import { HttpError } from "../validation/HttpError";

export const create = async (
  userBody: UserInterface
): Promise<UserInterface> => {
  return repository.create(userBody);
};

export const updateUserById = async (
  id: string,
  userBody: UserUpdateInterface
): Promise<UserInterface> => {
  const [user] = await repository.updateById(userBody, id);

  return user;
};

export const getAllUsers = async (): Promise<UserInterface[]> => {
  return repository.getAll();
};

export const remove = async (id: string): Promise<void> => {
  const result = await repository.remove(id);

  if (!result.affected) throw new HttpError(404, "User not found");
};
