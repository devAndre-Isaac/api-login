import { UserInterface } from "../interfaces/user";
import { User } from "../entity/user";
import { getRepository } from "typeorm";

export const create = async (
  UserObject: UserInterface
): Promise<UserInterface> => {
  const userEntity = Object.assign(new User(), UserObject);
  return getRepository(User).save(userEntity);
};
