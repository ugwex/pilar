import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PageModel, PageEventModel } from './../../../models/page.model';

@Component({
  selector: 'uii-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input()
  get dataPerPage(): number {
    return this._dataPerPage;
  }
  set dataPerPage(total: number) {
    this._dataPerPage = total;
    if (this.isDefined) {
      this.pageTotal = this.countPageTotal();
    }
  }
  @Input()
  get amountOfData(): number {
    return this._amountOfData;
  }
  set amountOfData(data: number) {
    this._amountOfData = data;
    if (this.isDefined) {
      this.pageTotal = this.countPageTotal();
    }
  }
  get pageTotal(): number {
    return this._pageTotal;
  }
  set pageTotal(total: number) {
    this._pageTotal = total;
    if (this.isInitilized) {
      this.doSelectPage(this.selectedPage);
    }
  }
  @Input()
  set currentPage(page: number) {
    if (page !== undefined) {
      this.doSelectPage(page);
    }
  }

  @Input() paginationALign = 'center';
  @Output() pageChanged = new EventEmitter<PageEventModel>();
  @Output() currentPageChange = new EventEmitter<number>();

  _amountOfData: number;
  _dataPerPage: number;
  _pageTotal: number;
  selectedPage = 1;
  isInitilized = false;
  pages: PageModel[];

  constructor() {
    this._dataPerPage = 10;
  }

  ngOnInit() {
    this.pages = this.renderPage(1, this._pageTotal);
    this.isInitilized = true;
  }

  countPageTotal() {
    return Math.ceil(this.amountOfData / this.dataPerPage);
  }

  renderPage(currentPage: number, pageTotal: number) {
    let startPage = 1;
    let endPage = pageTotal;
    if (pageTotal > 5) {
      startPage = Math.max(currentPage - Math.floor(5 / 2), 1);
      endPage = startPage + 5 - 1;
    }
    if (endPage > pageTotal) {
      endPage = pageTotal;
      startPage = endPage - 5 + 1;
    }
    const _pages = [];
    for (let num = startPage; num <= endPage; num++) {
      const page = this.makePage(num.toString(), num, num === currentPage);
      _pages.push(page);
    }
    return _pages;
  }

  makePage(label: string, value: number, active: boolean) {
    return {label, value, active};
  }

  onPageSelect(pageNumber: number) {
    this.doSelectPage(pageNumber);
    this.pageChanged.emit({page: this.selectedPage - 1, dataPerPage: this._dataPerPage});
  }

  doSelectPage(pageNumber: number) {
    this.selectedPage = pageNumber;
    this.pages = this.renderPage(this.selectedPage, this.pageTotal);
    this.currentPageChange.emit(this.selectedPage);
  }

  isDefined() {
    return this.amountOfData !== undefined && this.dataPerPage !== undefined;
  }
}
