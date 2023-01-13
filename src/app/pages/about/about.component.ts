import { Component } from '@angular/core';
import { trigger, transition, animate, keyframes, style, query, stagger } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        animate('1.2s', keyframes([
          style({opacity: 0, transform: 'translateY(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateY(0)', offset: 1.0})
        ]))
      ])
    ]),

      trigger('listAnimation', [
        transition('* => *', [
          query('img',style({ transform: 'translateX(-100%)'})),
          query('img',
            stagger('600ms', [
              animate('900ms', style({ transform: 'translateX(0)'}))
          ]))
        ])
      ])
    ]
})
export class AboutComponent {
  openLink(link:string) {
    window.open(link, '_blank');
  }
  ngOnInit() {
    window.scrollTo(0, 0);
  }
  public imgSrc:string = "/assets/rightarrowangle.png";
}

