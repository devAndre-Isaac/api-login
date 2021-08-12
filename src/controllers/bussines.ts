import {
  BussinesUpdateInterface,
  BussinesInterface,
} from "../interfaces/bussines";
import * as repository from "../repositories/bussines";
import { HttpError } from "../validation/HttpError";

export const create = async (
  bussinesBody: BussinesInterface
): Promise<BussinesInterface> => {
  return repository.create(bussinesBody);
};

export const updateBussinesById = async (
  id: string,
  bussinesBody: BussinesUpdateInterface,
): Promise<BussinesInterface> => {
  const [bussines] = await repository.updateById(bussinesBody, id);

  return bussines;
};

export const getAllBussines = async (): Promise<BussinesInterface[]> => {
  return repository.getAll();
};

export const remove = async (id: string): Promise<void> => {
  const result = await repository.remove(id);

  if (!result.affected) throw new HttpError(404, "Bussines not found");
};
