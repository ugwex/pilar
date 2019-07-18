import { Component, Input, TemplateRef } from '@angular/core';
import { trigger } from '@angular/animations';
import { fadeIn, fadeOut } from '../../../helpers/animations';


@Component({
  selector: 'uii-table-skeleton',
  templateUrl: './table-skeleton.component.html',
  animations: [
    trigger('fadeIn', fadeIn()),
    trigger('fadeOut', fadeOut())
  ]
})
export class TableSkeletonComponent {
  @Input() customElement: TemplateRef<any>;
  @Input() columnCount = 3;
  @Input() rowCount = 10;
  @Input() showActionColumn = true;
  @Input() showButtonCreate = true;
  @Input() showCheckButton = false;
  @Input() showLimitOptions = true;
  @Input() showMobileLimitOptions = true;
  @Input() showNumberColumn = true;
  @Input() showRadioButton = false;
  @Input() showSearchOptions = true;
  @Input() useCustomElement = false;
  rows = Array;
  columns = Array;
}
