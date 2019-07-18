import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'ugw-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit, AfterViewChecked {

  docUsage = `<pre class="prettyprint lang-typescript">import { BsDropdownModule } from 'ngx-bootstrap/dropdown';</pre>`;

  basicTemplate = `<pre class="prettyprint lang-html">
&lt;div class="btn-group" dropdown&gt;
  &lt;button dropdownToggle type="button" class="btn btn-primary dropdown-toggle"&gt;
    Button dropdown &lt;span class="caret"&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;ul *dropdownMenu class="dropdown-menu" role="menu"&gt;
    &lt;li role="menuitem"&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;
    &lt;li role="menuitem"&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;
    &lt;li role="menuitem"&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;
    &lt;li class="divider dropdown-divider"&gt;&lt;/li&gt;
    &lt;li role="menuitem"&gt;&lt;a class="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;</pre>`;

  basicComponent = `<pre class="prettyprint lang-typescript">import { Component } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'uii-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent {}</pre>`;

  variationsTemplate = `<pre class="prettyprint lang-html">
&lt;div class="btn-group" dropdown&gt;
  &lt;button dropdownToggle type="button" class="btn btn-primary dropdown-toggle"&gt;
    Dropdown with header & footer &lt;span class="caret"&gt;&lt;/span&gt;
  &lt;/button&gt;
  &lt;div *dropdownMenu class="dropdown-menu" role="menu"&gt;
    &lt;div class="dropdown-header"&gt;
      Header
    &lt;/div&gt;
    &lt;div class="dropdown-content"&gt;
      &lt;ul class="list-unstyled" role="menu"&gt;
        &lt;li role="menuitem"&gt;&lt;a class="dropdown-item" href="#"&gt;Action&lt;/a&gt;&lt;/li&gt;
        &lt;li role="menuitem"&gt;&lt;a class="dropdown-item" href="#"&gt;Another action&lt;/a&gt;&lt;/li&gt;
        &lt;li role="menuitem"&gt;&lt;a class="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;&lt;/li&gt;
        &lt;li class="divider dropdown-divider"&gt;&lt;/li&gt;
        &lt;li role="menuitem"&gt;&lt;a class="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;
        &lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
    &lt;div class="dropdown-footer"&gt;
      Footer
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</pre>`;

  variationsComponent = `<pre class="prettyprint lang-typescript">import { Component } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'uii-dropdown',
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent {}</pre>`;

  constructor(
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    PR.prettyPrint();
  }

}
