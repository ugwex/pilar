import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, HostBinding, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { takeWhile ,  filter } from 'rxjs/operators';

import { convertToBoolProperty } from '@uiigateway/pilar';
import { NbMenuItem, NbMenuInternalService } from './../../services/menu.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[sidebarMenuItem]',
  templateUrl: './sidebarmenu.component.html',
})
export class SidebarmenuComponent {
  @Input() menuItem = <NbMenuItem>null;

  @Output() hoverItem = new EventEmitter<any>();
  @Output() toggleSubMenu = new EventEmitter<any>();
  @Output() selectItem = new EventEmitter<any>();
  @Output() itemClick = new EventEmitter<any>();

  constructor(private router: Router) { }

  onToggleSubMenu(item: NbMenuItem) {
    this.toggleSubMenu.emit(item);
  }

  onHoverItem(item: NbMenuItem) {
    this.hoverItem.emit(item);
  }

  onSelectItem(item: NbMenuItem) {
    this.selectItem.emit(item);
  }

  onItemClick(item: NbMenuItem) {
    this.itemClick.emit(item);
  }
}

@Component({
  selector: 'ugw-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit, OnDestroy {
    @HostBinding('class.inverse') inverseValue: boolean;

    /**
     * Tags a menu with some ID, can be later used in the menu service
     * to determine which menu triggered the action, if multiple menus exist on the page.
     *
     * @type {string}
     */
    @Input() tag: string;

    /**
     * List of menu items.
     * @type List<NbMenuItem> | List<any> | any
     */
    @Input() items: Array<NbMenuItem> = [];

    /**
     * Makes colors inverse based on current theme
     * @type boolean
     */
    @Input()
    set inverse(val: boolean) {
      this.inverseValue = convertToBoolProperty(val);
    }

    /**
     * Collapse all opened submenus on the toggle event
     * Default value is "false"
     * @type boolean
     */
    @Input()
    set autoCollapse(val: boolean) {
      this.autoCollapseValue = convertToBoolProperty(val);
    }

    @Output() menuClicked = new EventEmitter<any>();
    @Output() sidebarCloseClicked = new EventEmitter<any>();

    private alive = true;
    private autoCollapseValue = false;

    constructor(private menuInternalService: NbMenuInternalService, private router: Router) { }

    ngOnInit() {
      try {
        this.menuInternalService
          .onAddItem()
          .pipe(
            takeWhile(() => this.alive),
          )
          .subscribe((data: { tag: string; items: NbMenuItem[] }) => {
            if (this.compareTag(data.tag)) {
              this.items.push(...data.items);
              this.menuInternalService.prepareItems(this.items);
            }
          });

        this.menuInternalService.onNavigateHome()
          .pipe(
            takeWhile(() => this.alive),
          )
          .subscribe((data: { tag: string }) => {
            if (this.compareTag(data.tag)) {
              this.navigateHome();
            }
          });

        this.menuInternalService
          .onGetSelectedItem()
          .pipe(
            takeWhile(() => this.alive),
            filter((data: any) => !data.tag || data.tag === this.tag),
          )
          .subscribe((data: { tag: string; listener: BehaviorSubject<{ tag: string; item: NbMenuItem }> }) => {
            data.listener.next({ tag: this.tag, item: this.getSelectedItem(this.items) });
          });

        this.router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
            this.menuInternalService.prepareItems(this.items);
          }
        });

        this.items.push(...this.menuInternalService.getItems());

        this.menuInternalService.prepareItems(this.items);
      } catch (error) {
        console.log(error);
      }
    }

    onHoverItem(item: NbMenuItem) {
      this.menuInternalService.itemHover(item, this.tag);
    }

    onToggleSubMenu(item: NbMenuItem) {
      if (this.autoCollapseValue) {
        this.menuInternalService.collapseAll(this.items, item);
      }
      item.expanded = !item.expanded;
      this.menuInternalService.submenuToggle(item, this.tag);
    }

    // TODO: is not fired on page reload
    onSelectItem(item: NbMenuItem) {
      this.menuInternalService.resetItems(this.items);
      item.selected = true;
      this.menuInternalService.itemSelect(item, this.tag);
      this.menuClicked.emit(item);
    }

    onItemClick(item: NbMenuItem) {
      this.menuInternalService.itemClick(item, this.tag);
    }

    onBtnSidebarCloseClick() {
      this.sidebarCloseClicked.emit();
    }

    ngOnDestroy() {
      this.alive = false;
    }

    private navigateHome() {
      const homeItem = this.getHomeItem(this.items);

      if (homeItem) {
        this.menuInternalService.resetItems(this.items);
        homeItem.selected = true;

        if (homeItem.link) {
          this.router.navigate([homeItem.link]);
        }

        if (homeItem.url) {
          window.location.href = homeItem.url;
        }
      }
    }

    private getHomeItem(items: NbMenuItem[]): NbMenuItem {
      let home = null;
      items.forEach((item: NbMenuItem) => {
        if (item.home) {
          home = item;
        }
        if (item.home && item.submenu && item.submenu.length > 0) {
          home = this.getHomeItem(item.submenu);
        }
      });
      return home;
    }

    private compareTag(tag: string) {
      return !tag || tag === this.tag;
    }

    private getSelectedItem(items: NbMenuItem[]): NbMenuItem {
      let selected = null;
      items.forEach((item: NbMenuItem) => {
        if (item.selected) {
          selected = item;
        }
        if (item.selected && item.submenu && item.submenu.length > 0) {
          selected = this.getSelectedItem(item.submenu);
        }
      });
      return selected;
    }
}
