import { ModulModel } from './modul.model';

export class AuthorityModel {
  id: number;
  name: string;
  moduls: ModulModel[];

  aplikasi: string;
  id_app: number;
  deskripsi: string;
  is_active: number;
  nama: string;
  uuid: string;
  id_oto: number;

  id_grup: number;
  id_otoritas: number;
  id_user: number;
  flag_read: number;
  flag_create: number;
  flag_update: number;
  flag_delete: number;
  flag_print: number;
  flag_verifikasi: number;
  flag_validasi: number;
  flag_exp_imp: number;
  nama_app: string;

  check_all_status: boolean;
}
