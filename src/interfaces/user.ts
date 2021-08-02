export interface UserInterface {
  name: string;
  email: string;
  password: string;

  company?: string;
  id?: string;
  updated_at?: Date;
  created_at?: Date;
}
export interface UpdateUserResponse {
  name: string;
  email: string;
  password: string;

  company: string;
  id: string;
  updated_at: Date;
  created_at: Date;
}
export interface UserUpdateInterface {
  name: string;
  email: string;
  password: string;
}
