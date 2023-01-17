import { Component } from '@angular/core';
import season2022json from 'src/assets/season2022.json';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import * as jsonpath from 'jsonpath';
import { getLocaleDayNames } from '@angular/common';
@Component({
  selector: 'app-season2022',
  templateUrl: './season2022.component.html',
  styleUrls: ['./season2022.component.css']
})
export class Season2022Component {
  constructor(private http: HttpClient) {
    this.http.get('/assets/season2022.json').pipe(map(data=> jsonpath.query(data, "$.name"))).subscribe(propertyValue => {
      this.setImage(propertyValue);
  });
  
}
image: any;

setImage(path: any){
  this.image = path;
}

getImage(path: any){
  return path;
}
console.log(getImage(image));
}