import { TabsetComponent } from './../../../../../../../projects/uiigateway/pilar/src/lib/components/utilities/tabset/tabset.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'ugw-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  basicImportModule = `<pre class="prettyprint lang-typescript">import { PilarModule } from '@uiigateway/pilar';

  @NgModule({
    imports: [
      PilarModule.forRoot()
    ]
  })
  export class AppModule(){}</pre>`;

  basicTemplate = `<pre class="prettyprint lang-html">

  &lt;uii-tabset>
    &lt;uiiTabItem title="Title 1">
      &lt;p>Content for tab 1&lt;/p>
    &lt;/uiiTabItem>
    &lt;uiiTabItem title="Title 2">
      &lt;p>Content for tab 2&lt;/p>
    &lt;/uiiTabItem>
    &lt;uiiTabItem title="Title 3">
      &lt;p>Content for tab 3&lt;/p>
    &lt;/uiiTabItem>
  &lt;/uii-tabset>
  </pre>`;

  basicComponent = `<pre class="prettyprint lang-typescript">import { Component } from '@angular/core';

  @Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html'
  })
  export class TabComponent {
    constructor() {}
  }</pre>`;

  titleComponentTemplate = `<pre class="prettyprint lang-html">

  &lt;uii-tabset [tabMobileAttr]="'both'">
    &lt;uiiTabItem title="Title 1" tabIcon="fa fa-address-card">
      &lt;p>Content for tab 1&lt;/p>
    &lt;/uiiTabItem>
    &lt;uiiTabItem title="Title 2" tabIcon="fa fa-address-camera">
      &lt;p>Content for tab 2&lt;/p>
    &lt;/uiiTabItem>
    &lt;uiiTabItem title="Title 3" tabIcon="fa fa-address-envelope">
      &lt;p>Content for tab 3&lt;/p>
    &lt;/uiiTabItem>
  &lt;/uii-tabset>
  </pre>`;

  manualSelectTemplate = `<pre class="prettyprint lang-html">

  &lt;span>
    &lt;button class="btn btn-primary" (click)="onSelectTab(1)">Select tab 2</button>
    &lt;button class="btn btn-primary" (click)="onSelectTab(3)">Select tab 4</button>
  &lt;/span>
  &lt;uii-tabset #uiiTabset>
    &lt;uiiTabItem title="Title 1">
      &lt;p>Content for tab 1&lt;/p>
    &lt;/uiiTabItem>
    &lt;uiiTabItem title="Title 2">
      &lt;p>Content for tab 2&lt;/p>
    &lt;/uiiTabItem>
    &lt;uiiTabItem title="Title 3">
      &lt;p>Content for tab 3&lt;/p>
    &lt;/uiiTabItem>
    &lt;uiiTabItem title="Title 4">
      &lt;p>Content for tab 4&lt;/p>
    &lt;/uiiTabItem>
  &lt;/uii-tabset>
  </pre>`;

  manualSelectComponent = `<pre class="prettyprint lang-typescript">import { Component } from '@angular/core';
import { TabsetComponent } from '@uiigateway/pilar';

  @Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html'
  })
  export class TabComponent {
    @ViewChild('uiiTabset') tabset: TabsetComponent;

    constructor() {}

    onSelectTab(tabId: number) {
      this.tabset.selectTab(tabId);
    }
  }</pre>`;

  selectedTemplate = `<pre class="prettyprint lang-html">

  &lt;uii-tabset>
    &lt;uiiTabItem title="Title 1" (selected)="onTabItemSelect($event)">
      &lt;p>Content for tab 1&lt;/p>
    &lt;/uiiTabItem>
    &lt;uiiTabItem title="Title 2" (selected)="onTabItemSelect($event)">
      &lt;p>Content for tab 2&lt;/p>
    &lt;/uiiTabItem>
    &lt;uiiTabItem title="Title 3" (selected)="onTabItemSelect($event)">
      &lt;p>Content for tab 3&lt;/p>
    &lt;/uiiTabItem>
  &lt;/uii-tabset>

  &lt;div class="well margin-top-20">
    Selected tab title is : {{_selectedTab}}
  &lt;/div>
  </pre>`;

  selectedComponent = `<pre class="prettyprint lang-typescript">import { Component } from '@angular/core';

  @Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html'
  })
  export class TabComponent {
    constructor() {}

    _selectedTab = '';

    onTabItemSelect($event: any) {
      this._selectedTab = $event.title;
    }
  }</pre>`;

  deSelectedTemplate = `<pre class="prettyprint lang-html">

  &lt;uii-tabset>
    &lt;uiiTabItem title="Title 1" (deselected)="onTabItemDeselect($event)">
      &lt;p>Content for tab 1&lt;/p>
    &lt;/uiiTabItem>
    &lt;uiiTabItem title="Title 2" (deselected)="onTabItemDeselect($event)">
      &lt;p>Content for tab 2&lt;/p>
    &lt;/uiiTabItem>
    &lt;uiiTabItem title="Title 3" (deselected)="onTabItemDeselect($event)">
      &lt;p>Content for tab 3&lt;/p>
    &lt;/uiiTabItem>
  &lt;/uii-tabset>

  &lt;div class="well margin-top-20">
    Selected tab title is : {{_deselectedTab}}
  &lt;/div>
  </pre>`;

  deSelectedComponent = `<pre class="prettyprint lang-typescript">import { Component } from '@angular/core';

  @Component({
    selector: 'app-tab',
    templateUrl: './tab.component.html'
  })
  export class TabComponent {
    constructor() {}

    _deselectedTab = '';

    onTabItemDeselect($event: any) {
      this._deselectedTab = $event.title;
    }
  }</pre>`;

  _selectedTab = '';
  _deselectedTab = '';
  @ViewChild('uiiTabset') tabset: TabsetComponent;

  constructor() { }

  ngOnInit() {
  }

  onTabItemSelect($event: any) {
    this._selectedTab = $event.title;
  }

  onTabItemDeselect($event: any) {
    this._deselectedTab = $event.title;
  }

  onSelectTab(tabId: number) {
    this.tabset.selectTab(tabId);
  }

}
