import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit() {
    window.scrollTo(0, 0);
  }
  public imgSrc:string = "/assets/rightarrowangle.png";

  getsrc() {
    return this.imgSrc;
  }
}
