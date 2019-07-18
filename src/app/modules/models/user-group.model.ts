import { AuthorityModel } from './authority.model';

export class UserGroupModel {
  id: number;
  user_id: number;
  group_id: number;
  name: string;
  activated_date: string;
  expired_date: string;
  is_active: number;
  is_default: number;
  user_created?: string;
  date_created?: string;
  user_update?: string;
  date_update?: string;

  flag_default: number;
  flag_student: number;
  id_grup: number;
  id_member: string;
  id_pt: string;
  id_user: number;
  nama: string;
  niu: string;
  tgl_akhir: string;
  tgl_aktif: string;
  uuid: string;

  app_otoritas: AuthorityModel[];
}
