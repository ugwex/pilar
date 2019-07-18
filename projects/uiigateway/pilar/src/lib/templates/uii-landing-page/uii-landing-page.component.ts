import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'uii-landing-page',
  templateUrl: './uii-landing-page.component.html',
  styleUrls: ['./uii-landing-page.component.scss']
})
export class UiiLandingPageComponent implements OnInit {
  @Input() application: any;

  constructor() { }

  ngOnInit() {
  }

}
