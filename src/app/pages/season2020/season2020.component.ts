import { AboutComponent } from 'src/app/pages/about/about.component';
import { Component } from '@angular/core';
import * as data from '../../../assets/seasons/2020/students.json';
import * as hey from '../../../assets/seasons/2020/mentors.json';
import * as doc from '../../../assets/seasons/2020/photos.json';
@Component({
  selector: 'app-season2020',
  templateUrl: './season2020.component.html',
  styleUrls: ['./season2020.component.css']
})
export class Season2020Component {
  about = new AboutComponent();
  students: any = (data as any).default;
  mentors: any = (hey as any).default;
  photos: any = (doc as any).default;
  
}
