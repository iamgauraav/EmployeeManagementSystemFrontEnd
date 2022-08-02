import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-empviewdetails',
  templateUrl: './empviewdetails.component.html',
  styleUrls: ['./empviewdetails.component.scss']
})
export class EmpviewdetailsComponent implements OnInit {
  panelOpenState = false;
  EmpId:any;
  token:any;
  employeeArray:any=[];

  constructor(private employee:EmployeeService, private snackBar:MatSnackBar) {this.token=localStorage.getItem("token") }

  ngOnInit(): void {
    this.getemployee();
  }

  getemployee() {
    let reqdata = {
      empId: this.EmpId
    };
    this.employee.getemployee().subscribe((response: any) => {
      console.log(response);
      this.employeeArray = response.data;
      
      console.log(this.employeeArray);
      this.snackBar.open('Employee detail fatch Successfull', '', {
        duration: 3000,
      })
    });
  }

}
