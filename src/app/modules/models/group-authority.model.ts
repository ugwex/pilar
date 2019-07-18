import { AuthorityModel } from './authority.model';

export class GroupAuthorityModel {
  id_app: number;
  name: string;
  app_otoritas: AuthorityModel[];
}
