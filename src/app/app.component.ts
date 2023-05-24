import { Component } from '@angular/core';
import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [
  //   trigger('routeAnimations', [
  //     transition('home => about', [
  //       style({ position: 'relative' }),
  //       query(':enter, :leave', [
  //         style({
  //           position: 'absolute',
  //           top: 0,
  //           right: 0,
  //           width: '100%'
  //         })
  //       ]),
  //       query(':enter', [
  //         style({ right: '-100%' })
  //       ]),
  //       query(':leave', animateChild()),
  //       group([
  //         query(':leave', [
  //           animate('300ms ease-out', style({ right: '100%' }))
  //         ]),
  //         query(':enter', [
  //           animate('300ms ease-out', style({ right: '0%' }))
  //         ])
  //       ]),
  //       query(':enter', animateChild()),
  //     ]),
  //     transition('about => home', [
  //       style({ position: 'relative' }),
  //       query(':enter, :leave', [
  //         style({
  //           position: 'absolute',
  //           top: 0,
  //           left: 0,
  //           width: '100%'
  //         })
  //       ]),
  //       query(':enter', [
  //         style({ left: '-100%' })
  //       ]),
  //       query(':leave', animateChild()),
  //       group([
  //         query(':leave', [
  //           animate('300ms ease-out', style({ left: '100%' }))
  //         ]),
  //         query(':enter', [
  //           animate('300ms ease-out', style({ left: '0%' }))
  //         ])
  //       ]),
  //       query(':enter', animateChild()),
  //     ])
  //   ])
  // ]
  // animations: [
  //   trigger('routeAnimations', [
  //     transition('home => about', [
  //       style({ position: 'relative' }),
  //       query(':enter, :leave', [
  //         style({
  //           position: 'absolute',
  //           top: 0,
  //           left: 0,
  //           width: '100%'
  //         })
  //       ]),
  //       query(':enter', [
  //         style({ transform: 'translateY(100%)' })
  //       ]),
  //       query(':leave', animateChild()),
  //       group([
  //         query(':leave', [
  //           animate('300ms ease-out', style({ transform: 'translateY(-100%)' }))
  //         ]),
  //         query(':enter', [
  //           animate('300ms ease-out', style({ transform: 'translateY(0%)' }))
  //         ])
  //       ]),
  //       query(':enter', animateChild()),
  //     ]),
  //     transition('about => home', [
  //       style({ position: 'relative' }),
  //       query(':enter, :leave', [
  //         style({
  //           position: 'absolute',
  //           top: 0,
  //           left: 0,
  //           width: '100%'
  //         })
  //       ]),
  //       query(':enter', [
  //         style({ transform: 'translateY(100%)' })
  //       ]),
  //       query(':leave', animateChild()),
  //       group([
  //         query(':leave', [
  //           animate('300ms ease-out', style({ transform: 'translateY(-100%)' }))
  //         ]),
  //         query(':enter', [
  //           animate('300ms ease-out', style({ transform: 'translateY(0%)' }))
  //         ])
  //       ]),
  //       query(':enter', animateChild()),
  //     ])
  //   ])
  // ]
  // animations: [
  //   trigger('routeAnimations', [
  //     transition('* => *', [
  //       style({ position: 'relative' }),
  //       query(
  //         ':enter, :leave',
  //         [
  //           style({
  //             position: 'absolute',
  //             top: 0,
  //             left: 0,
  //             width: '100%',
  //             height: '100%',
  //           }),
  //         ],
  //         { optional: true }
  //       ),
  //       query(':enter', [style({ transform: 'translateX(100%)' })], {
  //         optional: true,
  //       }),
  //       group([
  //         query(
  //           ':leave',
  //           [animate('300ms ease-out', style({ transform: 'translateX(-100%)' }))],
  //           { optional: true }
  //         ),
  //         query(
  //           ':enter',
  //           [animate('300ms ease-out', style({ transform: 'translateX(0)' }))],
  //           { optional: true }
  //         ),
  //       ]),
  //     ]),
  //   ]),
  // ]
  // animations: [
  //   trigger('routeAnimations', [
  //     transition('* <=> *', [
  //       query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
  //       query(':enter', style({ transform: 'translateX(100%)' }), { optional: true }),
  //       group([
  //         query(':leave', [animate('300ms ease-out', style({ transform: 'translateX(-100%)' }))], { optional: true }),
  //         query(':enter', [animate('300ms ease-out', style({ transform: 'translateX(0)' }))], { optional: true })
  //       ])
  //     ])
  //   ])
  // ]
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
        query(':enter', [
          style({ transform: 'translateY(100%)' }),
          animate('300ms ease-out', style({ transform: 'translateY(0%)' }))
        ], { optional: true }),
        query(':leave', [
          animate('300ms ease-out', style({ transform: 'translateY(100%)' }))
        ], { optional: true }),
      ])
    ])
  ]
})
export class AppComponent {
  prepareRouteTransition(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
