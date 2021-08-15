export interface AcademicInterface {
  name_institution: string;
  cnpj: string;
  course: string;
  image: string;
  use_for: string;
  id?: string;
  updated_at?: Date;
  created_at?: Date;
}
export interface UpdateAcademicResponse {
  name_institution: string;
  cnpj: string;
  course: string;
  image: string;
  use_for: string;

  id: string;
  updated_at: Date;
  created_at: Date;
}
export interface AcademicUpdateInterface {
  name_institution: string;
  cnpj: string;
  course: string;
  image: string;
  use_for: string;
}
