import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'uii-under-construction-page',
  templateUrl: './uii-under-construction-page.component.html',
  styleUrls: ['./uii-under-construction-page.component.scss']
})
export class UiiUnderConstructionPageComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  onBtnBackClick() {
    this.location.back();
  }

}
