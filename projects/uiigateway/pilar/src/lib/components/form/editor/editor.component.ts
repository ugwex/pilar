import { Component, OnDestroy, AfterViewInit, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

// Import TinyMCE
import 'tinymce/tinymce.min.js';

// A theme is also required
import 'tinymce/themes/modern/theme';

// Any plugins you want to use has to be imported
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';

declare var tinymce: any;

@Component({
  selector: 'uii-editor',
  templateUrl: './editor.component.html'
})
export class EditorComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() elementId: string;
  @Input() group: FormGroup;
  @Input() controlName: any;
  @Input() height = 150;
  @Input() content: string;
  @Output() editorContentChanged = new EventEmitter<any>();
  @Output() editorBlured = new EventEmitter<any>();

  editor;

  constructor() { }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      height : this.height,
      branding: false,
      menubar: false,
      toolbar: [
        'undo redo | styleselect | bold italic | bullist numlist | alignleft aligncenter alignright alignjustify'
      ],
      plugins: ['lists'],
      skin_url: '/assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        const self = this;
        editor.on('keyup change', () => {
          const content = editor.getContent();
          this.editorContentChanged.emit(content);
        }).on('blur', function (e) {
          const content = editor.getContent();
          self.editorBlured.emit(content);
        });
      },
    });
  }

  ngOnChanges() {
    if (this.editor) {
      if (this.content && this.content.length > 0) {
        this.editor.setContent(this.content);
      } else {
        this.editor.setContent('');
      }
    }
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

  onEditorBlur(content) {
    this.editorBlured.emit(content);
  }

}
