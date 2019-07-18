import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'ugw-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, AfterViewChecked {

  docUsage = `<pre class="prettyprint lang-typescript">import { AlertModule } from 'ngx-bootstrap/alert';</pre>`;
  dismissible = true;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    PR.prettyPrint();
  }

}
