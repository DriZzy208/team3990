import { Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';7
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

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
}
