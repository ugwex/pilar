import { UserGroupModel } from './user-group.model';

export class UserModel {
  id: number;
  college: string;
  partner: string;
  unit: string;
  name: string;
  password: string;
  photo: string;
  phone_number: string;
  status: string;
  date_created: string;
  date_update: string;
  groups: UserGroupModel[];
  checked: boolean;
  id_member: string;

  nama: string;
  otentifikasi: string;
  nama_group: string;
  group_lain: string;
  nama_unit: string;
  grup_lain: string;
  nama_grup: string;
  nama_grup_utama: string;
  email: string;
  // grup_lain:any[];
  id_bahasa: string;
  id_grup_utama: number;
  id_otentikasi: string;
  id_pt: string;
  id_template: string;
  id_unit: string;
  is_active: number;
  id_pengguna: string;
  id_user: number;
  id_status: string;
  niu: string;
  template: string;
  uuid: string;
  flag_student: number;
  fa_is_active: number;
  fa_key: string;
  nama_organisasi: string;
  organisasi: string;
}
