import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ugw-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginateComponent implements OnInit {

  basicImportModule = `<pre class="prettyprint lang-typescript">import { PilarModule } from '@uiigateway/pilar';

  @NgModule({
    imports: [
      PilarModule.forRoot()
    ]
  })
  export class AppModule(){}</pre>`;

  basicTemplate = `<pre class="prettyprint lang-html">

  &lt;uii-pagination
    [amountOfData]="100"
    [dataPerPage]="10">
  &lt;/uii-pagination>
  </pre>`;

  basicComponent = `<pre class="prettyprint lang-typescript">import { Component } from '@angular/core';

  @Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html'
  })
  export class PaginationComponent {
    constructor() {}
  }</pre>`;

  alignTemplate = `<pre class="prettyprint lang-html">

  &lt;h4>Left&lt;/h4>

  &lt;uii-pagination
    [amountOfData]="100"
    [dataPerPage]="10"
    [paginationALign]="'left'">
  &lt;/uii-pagination>

  &lt;h4>Center&lt;/h4>

  &lt;uii-pagination
    [amountOfData]="100"
    [dataPerPage]="10"
    [paginationALign]="'center'">
  &lt;/uii-pagination>

  &lt;h4>Right&lt;/h4>

  &lt;uii-pagination
    [amountOfData]="100"
    [dataPerPage]="10"
    [paginationALign]="'right'">
  &lt;/uii-pagination>
  </pre>`;

  alignComponent = `<pre class="prettyprint lang-typescript">import { Component } from '@angular/core';

  @Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html'
  })
  export class PaginationComponent {
    constructor() {}
  }</pre>`;

  pageChangeTemplate = `<pre class="prettyprint lang-html">

  &lt;uii-pagination
    [amountOfData]="90"
    [dataPerPage]="10"
    (pageChanged)="onPageChange($event)">
  &lt;/uii-pagination>
  </pre>`;

  pageChangeComponent = `<pre class="prettyprint lang-typescript">import { Component } from '@angular/core';

  @Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html'
  })
  export class PaginationComponent {
    selectedPage = 1;

    constructor() {}

    onPageChange($event: any) {
      this.selectedPage = $event.page;
    }
  }</pre>`;

  selectedPage = 0;

  constructor(
  ) { }

  ngOnInit() {
  }

  onPageChange($event: any) {
    this.selectedPage = $event.page;
  }

}
