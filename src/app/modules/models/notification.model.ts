export class NotificationModel {
  id: number;
  id_app: number;
  id_modul: number;
  name: string;
  url: string;
  pengirim: string;
  judul: string;
  pesan: string;
  to_id_grup: number;
  to_id_unit: number;
  to_id_member: number;
  to_email: string;
  flag_read: number;
  user_input: string;
  tgl_input: string;
  user_update: string;
  tgl_update: string;
  uuid: string;
  icon: string;
}
