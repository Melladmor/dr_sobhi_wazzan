export interface TitleI {
  title: string;
  description?: string;
}

export interface MoadlI {
  show: boolean;
  handleShowModal?: () => void;
}
export interface TestimnialsCardI {
  id: number;
  image: string;
  name: string;
  role: string;
  description: string;
}
export interface ConsultaionDataI {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  category: string;
  description: string;
}
