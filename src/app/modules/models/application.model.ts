import { AuthorizationModel } from './authorization.model';
export class ApplicationModel {
  id: number;
  college: string;
  name: string;
  short_name: string;
  version: string;
  order_show: number;
  description: string;
  status: string;
  date_created: string;
  date_update: string;

  kode: string;
  nama: string;
  nama_singkat: string;
  deskripsi: string;
  title: string;
  url: string;
  icon: string;
  versi: string;
  tgl_mulai: string;
  tgl_akhir: string;
  no_urut: string;
  on_boarding: string;
  is_active: number;
  user_input: string;
  tgl_input: string;
  user_update: string;
  tgl_update: string;
  uuid: string;

  checked: boolean;
  auth: AuthorizationModel;
}
