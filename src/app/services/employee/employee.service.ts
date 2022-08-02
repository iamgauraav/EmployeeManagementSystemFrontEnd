import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  empToken: any;

  constructor(private httService: HttpService) { }
  employeeSignin(reqdata: any) {
    console.log(reqdata)
    let header = {
      headers:new HttpHeaders({
        'Content-type': 'application/json',
      })
    };
    console.log(reqdata);
    return this.httService.postservice(`https://localhost:44386/Employee/LoginEmployee?Email=${reqdata.email}&Password=${reqdata.password}`, reqdata, false, header)
  }
}

