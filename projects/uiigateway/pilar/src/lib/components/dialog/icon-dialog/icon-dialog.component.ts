import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ICON_FONTS } from '../../../json/font-icons';

@Component({
  selector: 'uii-icon-dialog',
  templateUrl: './icon-dialog.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./icon-dialog.component.scss']
})
export class IconDialogComponent {

  iconList = ICON_FONTS;
  iconName;
  iconSelected: any;
  onClose: Subject<string>;
  listOfIcon = new Array<any>();
  listOfIconTemp = new Array<any>();

  constructor(
    public activeModal: BsModalRef,
  ) {
    this.onClose = new Subject();
    this.convertIconObjectToArray();
  }

  // menutup modal
  closeModal() {
    this.activeModal.hide();
  }

  // fungsi untuk merubah object of icon menjadi array of icon
  convertIconObjectToArray() {
    this.listOfIcon = [];
    for (const key in this.iconList) {
      if (key !== 'default' && this.iconList.hasOwnProperty(key)) {
        this.listOfIcon.push(this.iconList[key]);
      }
    }
    this.listOfIconTemp = this.listOfIcon;
  }

  // menangkap ikon yang dipilih
  selected(i, nama) {
    this.iconSelected =  nama;
    this.onClose.next(nama);
    this.closeModal();
  }

  updateListOfIcon(keyword) {
    const val = keyword.toLowerCase();

    // filter our data
    let tempFiltered = [];
    if (!val) {
      tempFiltered = this.listOfIconTemp;
    } else {
      this.listOfIconTemp.forEach ( value => {
        if ( String(value.class).toLowerCase().includes(val) ) {
          tempFiltered.push(value);
        }
      });
    }
    this.listOfIcon = tempFiltered;
  }
}
