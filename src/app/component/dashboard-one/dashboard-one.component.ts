import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin/admin.service';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-dashboard-one',
  templateUrl: './dashboard-one.component.html',
  styleUrls: ['./dashboard-one.component.scss']
})
export class DashboardOneComponent implements OnInit {
  dataSource: any = [];
  token:any;
  employeeId:any;
  
  

  constructor(private dialog: MatDialog,private admin: AdminService) { }

  ngOnInit(): void {
    this.token = localStorage.getItem("token");
    this.getAllEmployee();
  }
  openDialog() {
    this.dialog.open(RegisterComponent, {
    width:'32%',
    height:'75%',
    }).afterClosed().subscribe(val => {
      if (val === 'Save') {
        this.getAllEmployee();
      }
    })
  }
  getAllEmployee() {
    this.admin.getEmployee().subscribe(
      (response: any) => {
        console.log(response);
        this.dataSource = response.data;
        console.log(this.dataSource);
      })
  }
  updateEmployee(arr: any) {
    this.dialog.open(RegisterComponent, {
      width: '34%',
      height: '75%',
      data: arr
    }).afterClosed().subscribe(val => {
      if (val === 'update') {
        this.getAllEmployee();
      }
    })
  }
  // deleteEmployee(data: any) {
  //   this.admin.deleteEmployee(data.employeeId).subscribe(res => {
  //     alert("Employee Deleted Successfully")
  //     this.getAllEmployee();
  //   })
  // }

  deleteEmployee(EmpId: any) {
    let data = {EmployeeId:EmpId}
    this.admin.deleteEmployee(data).subscribe({
      next: (res) => {
        alert("Employee deleted successfully");
        this.getAllEmployee();
      },
      error: () => {
        alert("Error While deleting the Employee record");
      }
    })
  }

}
