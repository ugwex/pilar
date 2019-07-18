import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uiiHighlight'
})
export class UiihighlightPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    try {
      return value.replace('UII', '<span class="highlight">UII</span>');
    } catch (error) {
      return value;
    }
  }

}
