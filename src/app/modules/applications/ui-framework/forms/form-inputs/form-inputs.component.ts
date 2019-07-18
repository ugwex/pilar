import { Component, OnInit, AfterViewChecked  } from '@angular/core';

@Component({
  selector: 'ugw-form-inputs',
  templateUrl: './form-inputs.component.html',
  styleUrls: ['./form-inputs.component.scss']
})
export class FormInputsComponent implements OnInit, AfterViewChecked {

  variationsTemplate = `<pre class="prettyprint lang-html">
  &lt;div class="form-upload-photo"&gt;
  &lt;div class="form-upload-photo-input"&gt;
    &lt;div class="control-label" &gt;
        &lt;label class="btn btn-primary form-control-file"&gt;
            Unggah
            &lt;input #tagar type="file" (change)="onFileChange($event, index)" #fileInput&gt;
        &lt;/label&gt;
        &lt;div class="control-note"&gt;
          &lt;p&gt;Format &lt;br /&gt;  {{ fileTypeAllowed }} &lt;br /&gt; Maksimal {{ maxFileSize | fileSize:'MB' }}&lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div class="form-upload-photo-preview" [ngClass]="isImageExist ? 'showImage' : '' "&gt;
      &lt;img src="{{ imageBase64 }}" alt=""&gt;
      &lt;div class="change-photo"&gt;
          &lt;span class="fa fa-edit" &gt;
            &lt;input #tagar type="file" (change)="onFileChange($event, index)" #fileInput&gt;
          &lt;/span&gt;
          &lt;span class="fa fa-times" (click)="onImageDelete()"&gt;&lt;/span&gt;
      &lt;/div&gt;

  &lt;/div&gt;
  &lt;div class="failed-upload-photo"&gt;
        &lt;small *ngIf="fileOversize" class="text-danger"&gt;
          {{ 'file oversize' | translate }}
        &lt;/small&gt;
        &lt;small *ngIf="fileNotAllowed" class="text-danger"&gt;
            {{ 'file not allowed' | translate }}
        &lt;/small&gt;
    &lt;/div&gt;
  &lt;/div&gt;</pre>`;

  variationsComponent = `<pre class="prettyprint lang-typescript">import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
  import { IMAGE_PLACEHOLDER } from '../../../pilar.constant';
  import { ImageService } from '../../../services/image.service';

  @Component({
    selector: 'uii-photo-upload',
    templateUrl: './photo-upload.component.html',
    styleUrls: ['./photo-upload.component.scss']
  })
  export class PhotoUploadComponent implements OnInit {
    @ViewChild('tagar') tagar: ElementRef;
    @Input() label: string;
    @Input() required = false;
    @Input() fileType: Array<string> = ['png'];
    @Input() maxFileSize: 1;
    @Input() imageBase64: string;

    @Output() imageSelected = new EventEmitter();

    fileTypeAllowed: string;
    fileOversize = false;
    fileNotAllowed = false;
    isImageExist = false;
    index = 0;
    constructor(
      private imageSvc: ImageService
    ) { }

    ngOnInit() {
      this.fileTypeAllowed = '';
      this.fileType.forEach((type, index) => {
        if (index > 0) {
          this.fileTypeAllowed += ', ';
        }
        this.fileTypeAllowed += '*.' + type;
      });
    }

    onFileChange(event, index) {
      console.log(this.tagar.nativeElement.files);
      console.log(event);
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.imageBase64 = IMAGE_PLACEHOLDER;

        const typeAllowed = this.fileType.filter(type => file.type === 'image/' + type);

        this.imageSelected.emit(null);

        if (typeAllowed.length === 0) {
          this.onImageDelete();
          this.fileNotAllowed = true;
          return;
        }

        if (file.size >= this.maxFileSize) {
          this.onImageDelete();
          this.fileOversize = true;
          return;
        }


        this.fileOversize = false;
        this.fileNotAllowed = false;

        const self = this;
        this.imageSvc.imageBase64fromFile(file, function(base64) {
          self.imageBase64 = base64;
        });

        this.imageSelected.emit(file);
        this.isImageExist = true;
        this.index = index + 1;
      }
    }

      onImageDelete() {
        this.isImageExist = false;
        this.tagar.nativeElement.value = '';
        console.log(this.tagar.nativeElement.files);

      }

    }
    </pre>`;


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    PR.prettyPrint();
  }

}
