import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import { share } from 'rxjs/operators';

export interface NbMenuBag { tag: string; item: NbMenuItem; }

const itemClick$ = new ReplaySubject<NbMenuBag>(1);
const addItems$ = new ReplaySubject<{ tag: string; items: NbMenuItem[] }>(1);
const navigateHome$ = new ReplaySubject<{ tag: string }>(1);
const getSelectedItem$
  = new ReplaySubject<{ tag: string; listener: BehaviorSubject<NbMenuBag> }>(1);
const itemSelect$ = new ReplaySubject<NbMenuBag>(1);
const itemHover$ = new ReplaySubject<NbMenuBag>(1);
const submenuToggle$ = new ReplaySubject<NbMenuBag>(1);

/**
 * Menu Item options
 * TODO: check if we need both URL and LINK
 */
export abstract class NbMenuItem {
  name: string;
  /**
   * Item Title
   * @type {string}
   */
  title: string;
  /**
   * Item relative link (for routerLink)
   * @type {string}
   */
  link?: string;
  /**
   * Item URL (absolute)
   * @type {string}
   */
  url?: string;
  /**
   * Icon class name
   * @type {string}
   */
  icon?: string;
  /**
   * Expanded by defaul
   * @type {boolean}
   */
  expanded?: boolean;
  /**
   * submenus items
   * @type {List<NbMenuItem>}
   */
  submenu?: NbMenuItem[];
  /**
   * HTML Link target
   * @type {string}
   */
  target?: string;
  /**
   * Hidden Item
   * @type {boolean}
   */
  hidden?: boolean;
  /**
   * Item is selected when partly or fully equal to the current url
   * @type {string}
   */
  pathMatch ? = 'full'; // TODO: is not set if item is initialized by default, should be set anyway
  /**
   * Where this is a home item
   * @type {boolean}
   */
  home?: boolean;
  /**
   * Whether the item is just a group (non-clickable)
   * @type {boolean}
   */
  group?: boolean;
  parent?: NbMenuItem;
  selected?: boolean;
  data?: any;
  fragment?: string;
  otoritas?: any;
}

@Injectable()
export class MenuService {

  constructor() {}

}

// TODO: map select events to router change events
// TODO: review the interface
/**
 * Menu Service. Allows you to listen to menu events, or to interact with a menu.
 */
@Injectable()
export class NbMenuService {

  /**
   * Add items to the end of the menu items list
   * @param {List<NbMenuItem>} items
   * @param {string} tag
   */
  addItems(items: NbMenuItem[], tag?: string) {
    addItems$.next({ tag, items });
  }

  /**
   * Navigate to the home menu item
   * @param {string} tag
   */
  navigateHome(tag?: string) {
    navigateHome$.next({ tag });
  }

  /**
   * Returns currently selected item. Won't subscribe to the future events.
   * @param {string} tag
   * @returns {Observable<{tag: string; item: NbMenuItem}>}
   */
  getSelectedItem(tag?: string): Observable<NbMenuBag> {
    const listener = new BehaviorSubject<NbMenuBag>(null);

    getSelectedItem$.next({ tag, listener });

    return listener.asObservable();
  }

  onItemClick(): Observable<NbMenuBag> {
    return itemClick$.pipe(share());
  }

  onItemSelect(): Observable<NbMenuBag> {
    return itemSelect$.pipe(share());
  }

  onItemHover(): Observable<NbMenuBag> {
    return itemHover$.pipe(share());
  }

  onSubmenuToggle(): Observable<NbMenuBag> {
    return submenuToggle$.pipe(share());
  }
}

@Injectable()
export class NbMenuInternalService {
  private items: NbMenuItem[] = [];

  constructor(private router: Router, private location: Location) {
    this.items = [];
  }

  getItems(): NbMenuItem[] {
    return this.items;
  }

  prepareItems(items: NbMenuItem[]) {
    items.forEach(i => this.setParent(i));
    items.forEach(i => this.prepareItem(i));
  }

  resetItems(items: NbMenuItem[]) {
    items.forEach(i => this.resetItem(i));
  }

  collapseAll(items: NbMenuItem[], except?: NbMenuItem) {
    items.forEach(i => this.collapseItem(i, except));
  }

  onAddItem(): Observable<{ tag: string; items: NbMenuItem[] }> {
    return addItems$.pipe(share());
  }

  onNavigateHome(): Observable<{ tag: string }> {
    return navigateHome$.pipe(share());
  }

  onGetSelectedItem(): Observable<{ tag: string; listener: BehaviorSubject<NbMenuBag> }> {
    return getSelectedItem$.pipe(share());
  }

  itemHover(item: NbMenuItem, tag?: string) {
    itemHover$.next({tag, item});
  }

  submenuToggle(item: NbMenuItem, tag?: string) {
    submenuToggle$.next({tag, item});
  }

  itemSelect(item: NbMenuItem, tag?: string) {
    itemSelect$.next({tag, item});
  }

  itemClick(item: NbMenuItem, tag?: string) {
    itemClick$.next({tag, item});
  }

  private resetItem(item: NbMenuItem) {
    item.selected = false;

    if (item.submenu) {
      item.submenu.forEach(submenu => {
        this.resetItem(submenu);
      });
    }
  }

  private collapseItem(item: NbMenuItem, except?: NbMenuItem) {
    if (except && item === except) {
      return;
    }
    item.expanded = false;

    if (item.submenu) {
      item.submenu.forEach(submenu => {
        this.collapseItem(submenu);
      });
    }
  }

  private setParent(item: NbMenuItem) {
    if (item.submenu) {
      item.submenu.forEach(submenu => {
        submenu.parent = item;
        this.setParent(submenu);
      });
    }
  }

  private prepareItem(item: NbMenuItem) {
    item.selected = false;

    const exact: boolean = item.pathMatch === 'full';
    const location: string = this.location.path();

    if ((exact && location === item.link) || (!exact && location.includes(item.link))
      || (exact && item.fragment && location.substr(location.indexOf('#') + 1).includes(item.fragment))) {

      item.selected = true;
      this.selectParent(item);
    }

    if (item.submenu) {
      item.submenu.forEach(submenu => {
        this.prepareItem(submenu);
      });
    }
  }

  private selectParent(item: NbMenuItem) {
    const parent = item.parent;
    if (parent) {
      parent.selected = true;
      parent.expanded = true;
      this.selectParent(parent);
    }
  }
}
