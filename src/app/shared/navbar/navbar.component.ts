import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
  about!: string;
  seasons!: string;
  season!: string;
  history!: string;
  sponsors!: string;
  contact!: string;
  language!: string;
  currentLang!: string;
  homepage1!: string;
  homepage2!: string;
  homepage3!: string;
  homepage4!: string;
  title!: string;
  
  public changeLanguage() {
    let currentLang = this.getCurrentLanguage()
    if (currentLang == 'en') {
    this.translate.use("fr");
    } else {
    this.translate.use("en");
    }
  }

  public getCurrentLanguage() {
    return this.translate.currentLang;
  }
}


