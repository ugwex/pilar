import { Injectable } from '@angular/core';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class ImageService {
    dangerousUrl: string;
    trustedUrl: SafeUrl;

    constructor(
        private sanitizer: DomSanitizer,
    ) { }

    imageBase64fromFile(file, callback) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            callback(reader.result);
        };
    }

    imageBase64fromUrl(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
            const reader = new FileReader();
            reader.onloadend = function() {
                callback(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
      }

}
