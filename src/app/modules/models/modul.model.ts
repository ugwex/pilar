import { ActionModel } from './action.model';

export class ModulModel {
  id: number;
  name: string;
  description: string;
  application: string;
  is_active: number;
  status: string;
  date_created: string;
  date_update: string;
  actions?: ActionModel[];
  checked: boolean;

  // form setting Modul
  id_app: number;
  id_otoritas: number;
  nama: string;
  uuid: string;
  deskripsi: string;
  versi: string;
  tgl_aktif: string;
  tgl_akhir: string;
  nama_aplikasi: string;
  nama_otoritas: string;
}
