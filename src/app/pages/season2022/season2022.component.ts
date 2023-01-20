import { Component } from '@angular/core';
@Component({
  selector: 'app-season2022',
  templateUrl: './season2022.component.html',
  styleUrls: ['./season2022.component.css']
})
export class Season2022Component {
  domi(link:string) {
    for (let i = 0; i < 10; i++) {
      window.open(link, '_blank');
  }
}
}