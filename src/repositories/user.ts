import {
  UpdateUserResponse,
  UserInterface,
  UserUpdateInterface,
} from "../interfaces/user";
import { User } from "../entity/user";
import { createQueryBuilder, getRepository } from "typeorm";

export const create = async (
  UserObject: UserInterface
): Promise<UserInterface> => {
  const userEntity = Object.assign(new User(), UserObject);
  return getRepository(User).save(userEntity);
};

export const updateById = async (
  updateBody: UserUpdateInterface,
  id: string
): Promise<UpdateUserResponse[]> => {
  const updateRes = await createQueryBuilder()
    .update(User, Object.assign(new User(), { ...updateBody, id }))
    .where({ id })
    .returning("*")
    .execute();
  return updateRes.raw;
};

export const getAll = async (): Promise<UserInterface[]> => {
  return getRepository(User).find();
};
