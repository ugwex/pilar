import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'ugw-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit, AfterViewChecked {

  docUsage = `<pre class="prettyprint lang-typescript">import { AccordionModule } from 'ngx-bootstrap/accordion';</pre>`;

  basicTemplate = `<pre class="prettyprint lang-html">
&lt;accordion&gt;
  &lt;accordion-group heading="Static Header, initially expanded"&gt;
    This content is straight in the template.
  &lt;/accordion-group&gt;
  &lt;accordion-group #group&gt;
    &lt;div accordion-heading class="clearfix"&gt;
      I can have markup, too!
      &lt;span class="badge badge-secondary float-right pull-right"&gt;Some HTML here&lt;/span&gt;
    &lt;/div&gt;
    This is just some content to illustrate fancy headings.
  &lt;/accordion-group&gt;
  &lt;accordion-group heading="Group with isOpenChange event listener" (isOpenChange)="log($event)"&gt;
    &lt;p&gt;Some content&lt;/p&gt;
  &lt;/accordion-group&gt;
  &lt;accordion-group heading="Another group"&gt;
    &lt;p&gt;Some content&lt;/p&gt;
  &lt;/accordion-group&gt;
&lt;/accordion&gt;</pre>`;

  basicComponent = `<pre class="prettyprint lang-typescript">import { Component } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html'
})
export class AccordionComponent {
  log(event: boolean) {
    console.log(\`Accordion has been ${event ? 'opened' : 'closed'}\`);
  }
}</pre>`;

  variationsTemplate = `<pre class="prettyprint lang-html">
&lt;accordion&gt;
  &lt;accordion-group *ngFor="let group of groups" [heading]="group.title" [panelClass]="group.class"&gt;
    {{ group?.content }}
  &lt;/accordion-group&gt;
&lt;/accordion&gt;</pre>`;

  variationsComponent = `<pre class="prettyprint lang-typescript">import { Component } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html'
})
export class AccordionComponent {
  groups: any[] = [
    {
      title: 'Default - Disabled Options',
      content: 'This Content',
      class: '',
      disabled: true,
      open: false
    },
    {
      title: 'Primary - Opened Options',
      content: 'This Content',
      class: 'panel-primary',
      disabled: false,
      open: true
    },
    {
      title: 'Secondary',
      content: 'This Content',
      class: 'panel-secondary',
      disabled: false,
      open: false
    },
    {
      title: 'Tertiary',
      content: 'This Content',
      class: 'panel-tertiary',
      disabled: false,
      open: false
    },
    {
      title: 'Success',
      content: 'This Content',
      class: 'panel-success',
      disabled: false,
      open: false
    },
    {
      title: 'Info',
      content: 'This Content',
      class: 'panel-info',
      disabled: false,
      open: false
    },
    {
      title: 'Warning',
      content: 'This Content',
      class: 'panel-warning',
      disabled: false,
      open: false
    },
    {
      title: 'Danger',
      content: 'This Content',
      class: 'panel-danger',
      disabled: false,
      open: false
    }
  ];
}</pre>`;

  groups: any[] = [
    {
      title: 'Default - Disabled Options',
      content: 'This Content',
      class: '',
      disabled: true,
      open: false
    },
    {
      title: 'Primary - Opened Options',
      content: 'This Content',
      class: 'panel-primary',
      disabled: false,
      open: true
    },
    {
      title: 'Secondary',
      content: 'This Content',
      class: 'panel-secondary',
      disabled: false,
      open: false
    },
    {
      title: 'Tertiary',
      content: 'This Content',
      class: 'panel-tertiary',
      disabled: false,
      open: false
    },
    {
      title: 'Success',
      content: 'This Content',
      class: 'panel-success',
      disabled: false,
      open: false
    },
    {
      title: 'Info',
      content: 'This Content',
      class: 'panel-info',
      disabled: false,
      open: false
    },
    {
      title: 'Warning',
      content: 'This Content',
      class: 'panel-warning',
      disabled: false,
      open: false
    },
    {
      title: 'Danger',
      content: 'This Content',
      class: 'panel-danger',
      disabled: false,
      open: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    PR.prettyPrint();
  }

  log(event: boolean) {
    console.log(`Accordion has been ${event ? 'opened' : 'closed'}`);
  }


}
