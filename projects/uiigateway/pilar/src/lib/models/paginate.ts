export class Paginate {
  first?: string;
  last?: string;
  previous?: string;
  next?: string;
  cancel?: string;
  done?: string;
}

export class Page {
  size = 0;
  page: 0;
  totalElements = 0;
  totalPages = 0;
  pageNumber = 0;
  keyword: string;
}

/**
 * An array of data with an associated page object used for paging
 */
export class PagedData<T> {
  data = new Array<T>();
  page = new Page();
  response  = new Array<T>();
}
