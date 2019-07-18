import {
    Directive,
    ElementRef,
    AfterViewChecked,
    Input,
    HostListener
} from '@angular/core';
import { Subject } from 'rxjs';


@Directive({
  selector: '[equalHeight]'
})
export class MatchHeightDirective implements AfterViewChecked {

    // class name to match height
    @Input()
    equalHeight: any;

    @Input()
    equalHeightTrigger: Subject<any>;

    constructor(private el: ElementRef) {
    }

    ngAfterViewChecked() {
        if (this.equalHeightTrigger) {
            this.equalHeightTrigger.subscribe(() => {
                this.matchHeight(this.el.nativeElement, this.equalHeight);
            });
        } else {
            // call our matchHeight function here later
            this.matchHeight(this.el.nativeElement, this.equalHeight);
        }
    }

    @HostListener('window:resize')
    onResize() {
        // call our matchHeight function here later
        this.matchHeight(this.el.nativeElement, this.equalHeight);
    }

    matchHeight(parent: HTMLElement, className: string) {
        // match height logic here

        if (!parent) { return; }
        const children = parent.getElementsByClassName(className);

        if (!children) { return; }

        // reset all children height
        Array.from(children).forEach((x: HTMLElement) => {
            x.style.height = 'initial';
        });

        // gather all height
        const itemHeights = Array.from(children)
            .map(x => x.getBoundingClientRect().height);

        // find max height
        const maxHeight = itemHeights.reduce((prev, curr) => {
            return curr > prev ? curr : prev;
        }, 0);

        // apply max height
        Array.from(children)
            .forEach((x: HTMLElement) => x.style.height = `${maxHeight}px`);
    }
}
