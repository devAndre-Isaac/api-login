import {
    UpdateBussinesResponse,
    BussinesInterface,
    BussinesUpdateInterface,
  } from "../interfaces/bussines";
  import { User } from "../entity/user";
  import { createQueryBuilder, DeleteResult, getRepository } from "typeorm";
import { Bussines } from "../entity/bussines";
  
  export const create = async (
    BussinesObject: BussinesInterface
  ): Promise<BussinesInterface> => {
    const bussinesEntity = Object.assign(new Bussines(), BussinesObject);
    return getRepository(Bussines).save(bussinesEntity);
  };
  
  export const updateById = async (
    updateBody: BussinesUpdateInterface,
    id: string
  ): Promise<UpdateBussinesResponse[]> => {
    const updateRes = await createQueryBuilder()
      .update(Bussines, Object.assign(new Bussines(), { ...updateBody, id }))
      .where({ id })
      .returning("*")
      .execute();
    return updateRes.raw;
  };
  
  export const getAll = async (): Promise<BussinesInterface[]> => {
    return getRepository(Bussines).find();
  };
  
  export const remove = async (id: string): Promise<DeleteResult> => {
    return getRepository(Bussines).delete({ id });
  };
  