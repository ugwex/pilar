import { environment } from '../../environments/environment';

// tslint:disable-next-line:max-line-length
export const IMAGE_PLACEHOLDER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MzJERDRFRkJERUYxMUU3QkUzRkJEOTJCNTZERjhCRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MzJERDRGMEJERUYxMUU3QkUzRkJEOTJCNTZERjhCRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzMkRENEVEQkRFRjExRTdCRTNGQkQ5MkI1NkRGOEJEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQzMkRENEVFQkRFRjExRTdCRTNGQkQ5MkI1NkRGOEJEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xQAUNwAAASBJREFUeNrs0jERAAAIxDDAv+fHACNjIqHXTlLwbSTAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsuK0AAwBL0gQp9PLLgwAAAABJRU5ErkJggg==';

export const APPLICATION_ITEMS: Array <any> = [{
    nama_aplikasi: 'UIIFramework',
    title: 'UIIFramework',
    icon: IMAGE_PLACEHOLDER,
    deskripsi: 'UII Framework Kit for UIIGateway',
    url: 'ui-framework'
  },
  {
    nama_aplikasi: 'UIITemplates',
    title: 'UIITemplates',
    icon: IMAGE_PLACEHOLDER,
    deskripsi: 'UII Framework Kit for UIIGateway',
    url: 'ui-template'
  },
  {
    nama_aplikasi: 'UIIExamples',
    title: 'UIIExamples',
    icon: IMAGE_PLACEHOLDER,
    deskripsi: 'UII Examples Kit for UIIGateway',
    url: 'ui-examples'
  },
  {
    nama_aplikasi: 'UIIFramework',
    title: 'UIIFramework',
    icon: IMAGE_PLACEHOLDER,
    deskripsi: 'UII Framework Kit for UIIGateway',
    url: 'ui-framework'
  },
  {
    nama_aplikasi: 'UIIFramework',
    title: 'UIIFramework',
    icon: IMAGE_PLACEHOLDER,
    deskripsi: 'UI Framework Kit for UIIGateway',
    url: 'ui-framework'
  }
];

export const MENU_ITEMS = [
  {
    url: 'ui-framework',
    menu: [
      {
        id: 2,
        nama_menu: 'UI Features',
        url: '/ui-framework/ui-features',
        ikon: 'fa fa-star',
        submenu: [{
            id: 22,
            nama_menu: 'Color',
            url: '/ui-framework/color',
            ikon: '',
            otoritas: ['read']
          },
          {
            id: 21,
            nama_menu: 'Typography',
            url: '/ui-framework/typography',
            ikon: '',
            otoritas: ['read']
          },
          {
            id: 23,
            nama_menu: 'Button',
            url: '/ui-framework/button',
            ikon: '',
            otoritas: ['read']
          },
          {
            id: 24,
            nama_menu: 'Label',
            url: '/ui-framework/label',
            ikon: '',
            otoritas: ['read']
          },
          {
            id: 26,
            nama_menu: 'Information',
            url: '/ui-framework/information',
            ikon: '',
            otoritas: ['read']
          },
          {
            id: 27,
            nama_menu: 'Panel',
            url: '/ui-framework/panel',
            ikon: '',
            otoritas: ['read']
          },
          {
            id: 28,
            nama_menu: 'Icons',
            url: '/ui-framework/icons',
            ikon: '',
            otoritas: ['read']
          },
          {
            id: 288,
            nama_menu: 'Switch',
            url: '/ui-framework/switch',
            ikon: '',
            otoritas: ['read']
          },
          {
            id: 29,
            nama_menu: 'Wells',
            url: '/ui-framework/wells',
            ikon: '',
            otoritas: ['read']
          }
        ],
        otoritas: ['read']
      },
      {
        id: 3,
        nama_menu: 'Components',
        url: '/ui-framework/components',
        ikon: 'fa fa-cogs',
        submenu: [{
            id: 25,
            nama_menu: 'Alert',
            url: '/ui-framework/alert',
            ikon: '',
            otoritas: ['read']
          },
          {
            id: 31,
            nama_menu: 'Accordion',
            url: '/ui-framework/accordion',
            ikon: '',
            otoritas: ['read']
          },
          {
            id: 32,
            nama_menu: 'Dropdown',
            url: '/ui-framework/dropdown',
            ikon: '',
            otoritas: ['read']
          },
          {
            id: 33,
            nama_menu: 'Editor',
            url: '/ui-framework/editor',
            ikon: '',
            otoritas: ['read']
          },
          {
            id: 30,
            nama_menu: 'Modals',
            url: '/ui-framework/modals',
            ikon: '',
            otoritas: ['read']
          },
          {
            id: 35,
            nama_menu: 'Pagination',
            url: '/ui-framework/pagination',
            ikon: '',
            otoritas: ['read']
          },
          {
            id: 36,
            nama_menu: 'Tab',
            url: '/ui-framework/tab',
            ikon: '',
            otoritas: ['read']
          },
          {
            id: 34,
            nama_menu: 'Wizard',
            url: '/ui-framework/wizard',
            ikon: '',
            otoritas: ['read']
          }
        ],
        otoritas: ['read']
      },
      {
        id: 4,
        nama_menu: 'Forms',
        url: '/ui-framework/forms',
        ikon: 'fa fa-file-text',
        submenu: [{
            id: 41,
            nama_menu: 'Form Inputs',
            url: '/ui-framework/form-inputs',
            ikon: '',
            otoritas: ['read']
          }
        ],
        otoritas: ['read']
      },
      {
        id: 5,
        nama_menu: 'Tables',
        url: '/ui-framework/tables',
        ikon: 'fa fa-table',
        submenu: [{
            id: 51,
            nama_menu: 'Basic Tables',
            url: '/ui-framework/basic-tables',
            ikon: '',
            otoritas: ['read']
          },
          {
            id: 52,
            nama_menu: 'Data Tables',
            url: '/ui-framework/data-tables',
            ikon: '',
            otoritas: ['read']
          }
        ],
        otoritas: ['read']
      },
      {
        id: 6,
        nama_menu: 'Menu Level',
        url: '/ui-framework/menu',
        ikon: 'fa fa-th-list',
        submenu: [{
          id: 61,
          nama_menu: 'Level 2',
          url: '/ui-framework/#',
          ikon: '',
          otoritas: ['read'],
          submenu: [{
            id: 611,
            nama_menu: 'Level 3',
            url: '/ui-framework/#',
            ikon: '',
            otoritas: ['read'],
            submenu: [{
              id: 6111,
              nama_menu: 'Level 4',
              url: '/ui-framework/#',
              ikon: '',
              otoritas: ['read']
            }]
          }]
        }],
        otoritas: ['read']
      }
    ]
  },
  {
    url: 'ui-examples',
    menu: [
      {
        id: 81,
        nama_menu: 'Example 1',
        url: '/ui-examples/example-1',
        ikon: '',
        otoritas: ['read']
      },
      {
        id: 82,
        nama_menu: 'Example 2',
        url: '/ui-examples/example-2',
        ikon: '',
        otoritas: ['read']
      },
      {
        id: 83,
        nama_menu: 'Example 3',
        url: '/ui-examples/example-3',
        ikon: '',
        otoritas: ['read']
      }
    ]
  }
];

export const NOTIFICATION_ITEMS: Array < any > = [{
    icon: IMAGE_PLACEHOLDER,
    pesan: 'Masa jabatan mawar sudah kadaluarsa',
    tgl_input: '20170231',
    flag_read: 0
  },
  {
    icon: IMAGE_PLACEHOLDER,
    pesan: 'Mawar memberi komentar',
    tgl_input: '20170231',
    flag_read: 1
  },
  {
    icon: IMAGE_PLACEHOLDER,
    pesan: 'Prodi memberi komentar',
    tgl_input: '20170231',
    flag_read: 1
  },
  {
    icon: IMAGE_PLACEHOLDER,
    pesan: 'Mawar baru saja membayar SPP',
    tgl_input: '20170231',
    flag_read: 0
  },
  {
    icon: IMAGE_PLACEHOLDER,
    pesan: 'Randi telah melakukan key-in',
    tgl_input: '20170231',
    flag_read: 1
  }
];

export const DATA_ACCOUNT: any = {
  user_info: {
    name: 'Hanum Mawar',
    niu: 66773333
  },
  group_default: {
    name: 'Petugas BSI'
  },
  groups: [{
      name: 'Dosen'
    },
    {
      name: 'Mahasiswa'
    }
  ]
};

// API Base Url
export const BASE_URL_API = environment.apiUrl + '/public'; // Server API BASE URL

// AUTH API ENDPOINT
export const AUTH_ENDPOINT = {
  LOGIN: BASE_URL_API + '/auth/api/login',
  LOGOUT: BASE_URL_API + '/auth/api/logout',
  MENU: BASE_URL_API + '/auth/api/oto',
  CHANGE_PASSWORD: BASE_URL_API + '/auth/api/setpass',
  REGISTRASI_TWOFA: BASE_URL_API + '/auth/api/reg2fa',
  SUBMIT_TWOFA: BASE_URL_API + '/auth/api/submit2fa',
  VERIFY_TWOFA: BASE_URL_API + '/auth/api/verify2fa',
  PROFIL: BASE_URL_API + '/auth/api/profile'
};

// REPORT API ENDPOINT
export const REPORT_ENDPOINT = {
  SKPI: BASE_URL_API + '/report/skpi'
};

// DASHBOARD API ENDPOINT
export const DASHBOARD_ENDPOINT = {
  BASE: BASE_URL_API + '/dasbor',
  MAHASISWA: BASE_URL_API + '/dasbor/mahasiswa',
  KEUANGAN: BASE_URL_API + '/dasbor/keuangan',
  KEPEGAWAIAN: BASE_URL_API + '/dasbor/kepegawaian'
};

// SKPI API ENDPOINT
export const SKPI_ENDPOINT = {
  BASE: BASE_URL_API + '/skpi',
  GENERAL_INFO: BASE_URL_API + '/skpi/infoumum',
  MASTER_ORGANISASI: BASE_URL_API + '/skpi/master/organisasi',
  MASTER_THN_AKADEMIK: BASE_URL_API + '/skpi/master/thakademik',
  MASTER_SEMESTER: BASE_URL_API + '/skpi/master/semester',
  MASTER_PERIODE: BASE_URL_API + '/skpi/master/periode',
  MASTER_STATUS: BASE_URL_API + '/skpi/master/status'
};

// SETTING API ENDPOINT
export const SETTING_ENDPOINT = {
  BASE: BASE_URL_API + '/setting',
  APPLICATION: BASE_URL_API + '/setting/aplikasi',
  USER: BASE_URL_API + '/setting/user',
  OTORITAS: BASE_URL_API + '/setting/otoritas',
  GROUP: BASE_URL_API + '/setting/grup',
  MENU: BASE_URL_API + '/setting/menu',
  MASTER: BASE_URL_API + '/setting/master',
  MODUL: BASE_URL_API + '/setting/modul'
};

// MASTER DATA API ENDPOINT
export const REFERENCE_ENDPOINT = {
  BASE: BASE_URL_API + '/master',
  REGION: BASE_URL_API + '/master/'
};

// NOTIFICATION API ENDPOINT
export const NOTIF_ENDPOINT = {
  BASE: BASE_URL_API + '/notif'
};

// Constant Variable
export const SYSTEM_SETTING = {
  PAGE_LIMIT: 10,
  NOTIFICATION_INTERVAL: 60000
};

export const DATA_TYPE = {
  PERSON: 'person',
  COLLEGE: 'college',
  UNIT: 'unit',
  APPLICATION: 'application',
  MENU: 'menu',
  MODULE: 'module',
  USER: 'user',
  GROUP: 'group',
  ROLE: 'role',
  PARTNER: 'partner'
};

export const STATUS = [{
    value: 0,
    label: 'published'
  },
  {
    value: 1,
    label: 'trashed'
  }
];

export const PROGRES_STATUS = {
  REVISED: 'terevisi',
  VERIFIED: 'terverifikasi',
  VALIDATED: 'tervalidasi',
  PRINTED: 'tercetak'
};

export const GROUP = {
  MAHASISWA: 'Mahasiswa',
  AKADEMIK_FAKULTAS: 'Akademik Fakultas'
};

export const FORM_STATUS = {
  CREATE: 'create',
  UPDATE: 'update'
};

export const NOTIFICATION_TYPE = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error'
};

export const MODAL = {
  ALERT: {
      INFO: 'modal-alert modal-info',
      SUCCESS: 'modal-alert modal-info',
      WARNING: 'modal-alert modal-warning',
      DANGER: 'modal-alert modal-danger'
  },
  DETAIL: {
      DEFAULT: 'modal-detail',
      MEDIUM: 'modal-md modal-detail',
      LARGE: 'modal-lg modal-detail',
      XL: 'modal-xl modal-detail'
  }
};
