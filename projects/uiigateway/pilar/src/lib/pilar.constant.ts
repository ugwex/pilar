export const IMAGES_ROOT = 'assets/img/';

// tslint:disable-next-line:max-line-length
export const IMAGE_PLACEHOLDER = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MzJERDRFRkJERUYxMUU3QkUzRkJEOTJCNTZERjhCRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MzJERDRGMEJERUYxMUU3QkUzRkJEOTJCNTZERjhCRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzMkRENEVEQkRFRjExRTdCRTNGQkQ5MkI1NkRGOEJEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQzMkRENEVFQkRFRjExRTdCRTNGQkQ5MkI1NkRGOEJEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xQAUNwAAASBJREFUeNrs0jERAAAIxDDAv+fHACNjIqHXTlLwbSTAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsMBbGwlhgLIyFscBYGAtjgbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFsYCY2EsjAXGwlgYC4yFsTAWGAtjYSwwFsbCWGAsjIWxwFgYC2OBsTAWxgJjYSyMBcbCWBgLjIWxMBYYC2NhLDAWxsJYYCyMhbHAWBgLY4GxMBbGAmNhLIwFxsJYGAuMhbEwFhgLY2EsuK0AAwBL0gQp9PLLgwAAAABJRU5ErkJggg==';

export const SYSTEM_SETTING = {
  PAGE_LIMIT: 10,
  NOTIFICATION_INTERVAL: 60000
};


export const FORM_STATUS = {
  CREATE: 'create',
  READ: 'read',
  UPDATE: 'update'
};

export const AUTH_TYPE = {
  ACTIVATE: 'aktivasi',
  READ: 'read',
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
  PRINT: 'print',
  VERIFY: 'verifikasi',
  VALIDATE: 'validasi',
  PUBLISH: 'terbit',
  EXP_IMP: 'exp_imp'
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

export const SELECT_YES_NO = [
  { label: 'Ya', value: 1 },
  { label: 'Tidak', value: 0 }
];

export const MINIMAL_SCORE = [
  { label: 'A', value: 'A' },
  { label: 'B', value: 'B' },
  { label: 'C', value: 'C' },
  { label: 'D', value: 'D' }
];

export const PROGRES_STATUS = {
  REVISED: 'terevisi',
  VERIFIED: 'terverifikasi',
  VALIDATED: 'tervalidasi',
  PRINTED: 'tercetak'
};
