export interface BussinesInterface {
  corporate_name: string;
  email: string;
  password: string;
  image: string;
  cnpj: string;
  id?: string;
  updated_at?: Date;
  created_at?: Date;
}
export interface UpdateBussinesResponse {
  corporate_name: string;
  email: string;
  password: string;
  image: string;
  cnpj: string;

  id: string;
  updated_at: Date;
  created_at: Date;
}
export interface BussinesUpdateInterface {
  corporate_name: string;
  email: string;
  password: string;
  image: string;
  cnpj: string;
}
