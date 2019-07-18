import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'ugw-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, AfterViewChecked {

  basicTemplate = `<pre class="prettyprint lang-html">
&lt;uii-editor elementId="editor-id"&gt;
&lt;/uii-editor&gt;</pre>`;

  basicComponent = `<pre class="prettyprint lang-typescript">
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html'
})
export class EditorComponent {}</pre>`;

  variationsTemplate = `<pre class="prettyprint lang-html">
&lt;form [formGroup]="exampleForm"&gt;
  &lt;uii-editor
    elementId="example-reactive"
    [group]="exampleForm"
    [controlName]="'example_control'"
    [content]="exampleEditorContent"
    (editorContentChanged)="onEditorContentChanged($event)"
    (editorBlured)="onEditorBlured()"&gt;&lt;/uii-editor&gt;
&lt;/form&gt;</pre>`;

  variationsComponent = `<pre class="prettyprint lang-typescript">
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html'
})
export class EditorComponent {
  editorContent: any;
  exampleForm: FormGroup;
  exampleEditorContent: any;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.exampleForm = this.formBuilder.group({
      example_control: ''
    });

    setTimeout(() => {
      this.exampleEditorContent = '<strong>I am strong text</strong>';
    }, 100);
  }

  onEditorBlured() {

  }

  onEditorContentChanged($event) {
    this.editorContent = $event;
  }
}</pre>`;

  editorContent: any;
  exampleForm: FormGroup;
  exampleEditorContent: any;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.exampleForm = this.formBuilder.group({
      example_control: ''
    });

    setTimeout(() => {
      this.exampleEditorContent = '<strong>I am strong text</strong>';
    }, 100);
  }

  ngAfterViewChecked() {
    PR.prettyPrint();
  }

  onEditorBlured() {

  }

  onEditorContentChanged($event) {
    this.editorContent = $event;
  }

}
