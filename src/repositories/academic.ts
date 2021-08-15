import { AcademicInterface } from "../interfaces/academic";
import { Academic } from "../entity/academic";
import { getRepository } from "typeorm";

export const create = async (
  AcademicObject: AcademicInterface
): Promise<AcademicInterface> => {
  const academicEntity = Object.assign(new Academic(), AcademicObject);
  return getRepository(Academic).save(academicEntity);
};
