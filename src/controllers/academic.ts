import { AcademicInterface } from "../interfaces/academic";
import * as repository from "../repositories/academic";

export const create = async (
  academicBody: AcademicInterface
): Promise<AcademicInterface> => {
  return repository.create(academicBody);
};
