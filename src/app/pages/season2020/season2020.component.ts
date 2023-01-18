import { Component } from '@angular/core';
import { AboutComponent } from 'src/app/pages/about/about.component';
@Component({
  selector: 'app-season2020',
  templateUrl: './season2020.component.html',
  styleUrls: ['./season2020.component.css']
})
export class Season2020Component {
  about = new AboutComponent();

}
