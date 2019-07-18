import { share } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { TabsetDirective } from './../../../directives/tabset-tab/tabset.directive';

@Component({
  selector: 'uii-tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})
export class TabsetComponent implements OnInit {

  @Input() tabMobileAttr = 'both';
  tabs: TabsetDirective[] = [];

  constructor() { }

  ngOnInit() {}

  public addTab(tab: TabsetDirective): void {
    this.tabs.push(tab);
    this.tabs[0].active = true;
  }

  onTabClick(tab: TabsetDirective) {
    this.tabs.forEach((tabItem: TabsetDirective) => {
      if (tabItem === tab) {
        tabItem.active = true;
        tabItem.selectedTab = tab;
      } else {
        tabItem.active = false;
      }
    });
  }

  getLeft() {
    const index = this.tabs.findIndex(item => item.active === true);
    return index * (100 / this.tabs.length);
  }

  borderWidth() {
    return (100 / this.tabs.length);
  }

  selectTab(tabIndex: number) {
    this.tabs.forEach((tabItem: TabsetDirective, index: number) => {
      if (index === tabIndex) {
        tabItem.active = true;
        tabItem.selectedTab = tabItem;
      } else {
        tabItem.active = false;
      }
    });
  }

}
