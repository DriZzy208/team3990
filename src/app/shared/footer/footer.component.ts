import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { AboutComponent } from 'src/app/pages/about/about.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faGithub = faGithub;
  faFaceBook = faFacebook;
  faYoutube = faYoutube;
  faTwitter = faTwitter;
  about = new AboutComponent();
  constructor() { }
}
