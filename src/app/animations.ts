import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';

// Component transition animations
export const slideInDownAnimation: AnimationEntryMetadata = 
  trigger('routeAnimation', [
    state('*', 
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })// end style
    ),// end state
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),// style
      animate('0.2s ease-in')
    ]),// end transition: enter
    transition(':leave', [
      animate('0.5s ease-out', style({
        opacity: 0,
        transform: 'translateY(100%)'
      }))//end animate
    ])// end transition: leave
  ]);// end trigger