import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@uiigateway/pilar';

@Component({
  selector: 'ugw-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.scss']
})
export class DataTablesComponent implements OnInit {

  basicImportModule = `<pre class="prettyprint lang-typescript">import { PilarModule } from '@uiigateway/pilar';

  @NgModule({
    imports: [
      PilarModule.forRoot()
    ]
  })
  export class AppModule(){}</pre>`;

  basicTemplate = `<pre class="prettyprint lang-html">

  &lt;uii-datatable [columns]="columns" [rows]="rows">&lt;/uii-datatable>
  </pre>`;

  basicComponent = `<pre class="prettyprint lang-typescript">import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html'
  })
  export class PaginationComponent implements OnInit {

    columns: Array<any> = [];
    rows = new Array<any>();

    constructor() {}

    ngOnInit() {
      this.columns = [
        {
          name: this.translateSvc.instant('no'),
          prop: 'number',
          type: 'number'
        },
        {
          name: this.translateSvc.instant('name'),
          prop: 'nama'
        },
        {
          name: 'Alamat',
          prop: 'alamat'
        }
      ];

      this.rows = [
        {
          nama: 'Takin',
          alamat: 'Yogyakarta'
        },
        {
          nama: 'Yudin',
          alamat: 'Palembang'
        },
        {
          nama: 'Rani',
          alamat: 'Malang'
        },
        {
          nama: 'Saeful',
          alamat: 'Bali'
        }
      ];
    }
  }</pre>`;

  columns: Array<any> = [];
  rows = new Array<any>();
  auth = {canDelete : true, canRead: true, canUpdate: true};
  showTable = false;

  constructor(
    private translateSvc: TranslateService
  ) { }

  ngOnInit() {
    this.columns = [
      {
        name: this.translateSvc.instant('no'),
        prop: 'number'
      },
      {
        name: this.translateSvc.instant('name'),
        prop: 'nama'
      },
      {
        name: 'Alamat',
        prop: 'alamat'
      }
    ];

    this.rows = [
      {
        nama: 'Takin',
        alamat: 'Yogyakarta',
        auth: this.auth
      },
      {
        nama: 'Yudin',
        alamat: 'Palembang',
        auth: this.auth
      },
      {
        nama: 'Rani',
        alamat: 'Malang',
        auth: this.auth
      },
      {
        nama: 'Saeful',
        alamat: 'Bali',
        auth: this.auth
      },
      {
        nama: 'Takin',
        alamat: 'Yogyakarta',
        auth: this.auth
      },
      {
        nama: 'Yudin',
        alamat: 'Palembang',
        auth: this.auth
      },
      {
        nama: 'Rani',
        alamat: 'Malang',
        auth: this.auth
      },
      {
        nama: 'Saeful',
        alamat: 'Bali',
        auth: this.auth
      },
      {
        nama: 'Takin',
        alamat: 'Yogyakarta',
        auth: this.auth
      },
      {
        nama: 'Yudin',
        alamat: 'Palembang',
        auth: this.auth
      },
      {
        nama: 'Rani',
        alamat: 'Malang',
        auth: this.auth
      },
      {
        nama: 'Saeful',
        alamat: 'Bali',
        auth: this.auth
      }
    ];

    setTimeout(() => {
      this.showTable = true;
    }, 2000);
  }

}
