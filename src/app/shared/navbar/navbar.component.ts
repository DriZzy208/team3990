import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

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


