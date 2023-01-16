import { Component } from '@angular/core';
import EmployeesJson from 'src/assets/season2022.json';

interface EMPLOYEE {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

@Component({
  selector: 'app-season2022',
  templateUrl: './season2022.component.html',
  styleUrls: ['./season2022.component.css']
})
export class Season2022Component {
  Employees: EMPLOYEE[] = EmployeesJson;
  constructor(){
    console.log(this.Employees);
  }
}