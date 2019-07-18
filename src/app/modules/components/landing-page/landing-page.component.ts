import { Component, OnInit } from '@angular/core';
import { DataService } from '@uiigateway/pilar';

@Component({
  selector: 'ugw-landing-page',
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent implements OnInit {
  public application: any;

  constructor(
    private dataSvc: DataService
  ) { }

  ngOnInit() {
    this.application = JSON.parse(localStorage.getItem('MU_current_opened_app'));
  }

}
