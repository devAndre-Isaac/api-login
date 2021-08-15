import { getRepository } from "typeorm";
import {
  AcademicUpdateInterface,
  AcademicInterface,
} from "../interfaces/academic";
import { Academic } from "../entity/academic";
import { request, response } from "express";
import * as repository from "../repositories/academic";

export const create = async (
  academicBody: AcademicInterface
): Promise<AcademicInterface> => {
  return repository.create(academicBody);
};
