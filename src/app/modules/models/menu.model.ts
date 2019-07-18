export class MenuModel {
  id?: number;
  name?: string;
  path?: string;
  url?: string;
  description?: string;
  target?: string;
  icon?: string;
  menu?: MenuModel[];
  submenus?: MenuModel[];
  id_app?: number;
  id_otoritas?: number;
  no_urut?: number;
  id_induk?: number;
  nama?: string;
  deskripsi?: string;

  is_active?: string;
  order?: string;
  title?: string;
  uuid?: string;
  version?: string;

  nama_app?: string;
  menu_utama?: string;
  nama_otoritas?: string;
}
