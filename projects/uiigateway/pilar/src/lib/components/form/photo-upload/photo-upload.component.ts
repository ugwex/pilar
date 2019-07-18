import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
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
  @Input() fileType: Array<string> = ['png', 'jpg', 'jpeg'];
  @Input() maxFileSize = 5;
  @Input() maxFileType = 'MB';
  @Input() imageBase64: string;
  @Input() width = '120px';
  @Input() height = '160px';

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
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imageBase64 = IMAGE_PLACEHOLDER;

      const typeAllowed = this.fileType.filter(type => file.type === 'image/' + type);

      this.imageSelected.emit(null);
      this.fileOversize = false;
      this.fileNotAllowed = false;

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
    this.imageSelected.emit(null);
    this.tagar.nativeElement.value = '';
  }

}
