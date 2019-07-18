import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'uii-not-found-page',
  templateUrl: './uii-not-found-page.component.html'
})
export class UiiNotFoundPageComponent implements OnInit {
  @Input() backLink = '/';
  @Input() statusCode = '404';

  constructor() { }

  ngOnInit() {
  }

}
