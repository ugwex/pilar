import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { IMAGE_PLACEHOLDER } from '../../../pilar.constant';
import { ImageService } from '../../../services/image.service';

@Component({
  selector: 'uii-image-upload',
  templateUrl: './image-upload.component.html'
})
export class UiiImageUploadComponent implements OnInit {
  @Input() label: string;
  @Input() required = false;
  @Input() fileType: Array<string> = ['png'];
  @Input() maxFileSize: 1;
  @Input() imageBase64: string;

  @Output() imageSelected = new EventEmitter();

  fileTypeAllowed: string;
  fileOversize = false;
  fileNotAllowed = false;

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

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imageBase64 = IMAGE_PLACEHOLDER;

      const typeAllowed = this.fileType.filter(type => file.type === 'image/' + type);

      this.imageSelected.emit(null);

      if (typeAllowed.length === 0) {
        this.fileNotAllowed = true;
        return;
      }

      if (file.size >= this.maxFileSize) {
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
    }
  }

}
