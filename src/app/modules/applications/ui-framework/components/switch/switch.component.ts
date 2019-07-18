import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ugw-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  basicImportModule = `<pre class="prettyprint lang-typescript">import { PilarModule } from '@uiigateway/pilar';

  @NgModule({
    imports: [
      PilarModule.forRoot()
    ]
  })
  export class AppModule(){}</pre>`;

  basicTemplate = `<pre class="prettyprint lang-html">


  &lt;uii-switch>&lt;/uii-switch>
  </pre>`;

  basicComponent = `<pre class="prettyprint lang-typescript">import { Component } from '@angular/core';

  @Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html'
  })
  export class SwitchComponent {
    constructor() {}
  }</pre>`;

  _checked = false;

  constructor() { }

  ngOnInit() {
  }

  onChangeSwitch($event) {
    console.log($event);
  }

  onChangeEvent($event: any) {
    setTimeout(() => {
      this._checked = !this._checked;
    }, 2000);
  }

}
