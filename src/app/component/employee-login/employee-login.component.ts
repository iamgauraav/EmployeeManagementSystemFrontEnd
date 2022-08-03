import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.scss']
})
export class EmployeeLoginComponent implements OnInit {
  employeeForm! : FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder, private employee: EmployeeService, private router: Router,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({   
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

  }
  onSubmit()
  {
    this.submitted=true;
    if(this.employeeForm.valid){
      console.log("Login Successfully",this.employeeForm.value);
      let reqData={
        email:this.employeeForm.value.email,
        password:this.employeeForm.value.password,
      }
      this.employee.employeeSignin(reqData).subscribe((result:any)=>{
        console.log(result);
       localStorage.setItem('emptoken',result.token); 
        this.router.navigateByUrl('/empviewdetails') 
        this.snackBar.open('Login Successfully..!!!', '..', {
          duration: 3000,
        }) 
      })
      
    }
    else{
      console.log("invalid data",this.employeeForm.value);
    }
  }

}
