import { InjectionToken } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from '../languages/lang-en';
import { LANG_ID_NAME, LANG_ID_TRANS } from '../languages/lang-id';

// translation token
export const TRANSLATIONS = new InjectionToken('translations');

// all traslations
// export const dictionary : any = {
// 	[LANG_EN_NAME]: LANG_EN_TRANS,
// 	[LANG_ID_NAME]: LANG_ID_TRANS,
// };

export const dictionary: any = {
  'en': LANG_EN_TRANS,
  'id': LANG_ID_TRANS,
};

// providers
// export const TRANSLATION_PROVIDERS = [{
//   provide: TRANSLATIONS,
//   useValue: dictionary
// }];
