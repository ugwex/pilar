import {
    style,
    animate,
    transition,
    state
} from '@angular/animations';

export function fadeIn() {
  return [
    state('in', style({ opacity: 1 })),
    transition(':enter', [
        style({ opacity: 0 }),
        animate(400)
    ])
  ];
}

export function fadeOut() {
  return [
    state('out', style({ opacity: 0 })),
    transition(':leave', [
        style({ opacity: 1 }),
        animate(400)
    ])
  ];
}
