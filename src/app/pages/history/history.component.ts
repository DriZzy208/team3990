import { Component, AfterViewInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  
  constructor(private translate: TranslateService) { 
  }
  getlangue(){
    let langueactuel:string = this.translate.instant('language');
    return langueactuel;
  }
  
  seasons: any[] = [
    {
      "name": this.getlangue()
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    },
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ];
}
