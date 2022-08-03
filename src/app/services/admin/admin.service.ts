import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  BaseUrl=environment.baseUrl;  
  token:any;
  empId:any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
   }
   //login Method
   login(data: any) {
    console.log(data);

    let header = {
      Headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
      })
    };
    return this.httpService.postservice('https://localhost:44386/Admin/Login/iamgaurav%40gmail.com/Gaurav1',

    data,
    false
    ,header);    
  }

  getEmployee() {
    
    console.log(" getEmployee service");
    let head = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      }),
    };
    return this.httpService.getService('https://localhost:44386/Employee/GetAllEmployee', true, head)
  };

  Register(reqdata: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log(reqdata);
    return this.httpService.postservice('https://localhost:44386/Employee/AddEmployee', reqdata, true, header)
  }
  updateEmployee(data: any, EmployeeId: any) {
    console.log(this.token);
    console.log(data, EmployeeId);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log(data, EmployeeId);
    return this.httpService.putservices(`https://localhost:44386/Employee/UpdateEmployee/${EmployeeId}`, data, true, header);
  }
  deleteEmployee(data:any) {
    console.log(data)
    let head = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      }),
    };
    console.log(head)
    return this.httpService.deleteService(`https://localhost:44386/Employee/Delete/${data.EmployeeId}`, true, head);
  }


}
