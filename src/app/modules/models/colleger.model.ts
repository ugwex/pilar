import { AuthorizationModel } from './authorization.model';
export class CollegerModel {
  id: string;
  nim: string;
  nama: string;
  nama_mhs: string;
  tempat_lahir: string;
  tgl_lahir: string;
  bln_lahir: string;
  thn_lahir: string;
  nama_organisasi: string;
  nama_organisasi_en: string;
  status_perbaikan: string;
  status_verifikasi: string;
  file_bukti: string;

  auth: AuthorizationModel;
}
