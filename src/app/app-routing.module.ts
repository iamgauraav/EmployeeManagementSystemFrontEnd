import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardOneComponent } from './component/dashboard-one/dashboard-one.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EmployeeLoginComponent } from './component/employee-login/employee-login.component';
import { EmpviewdetailsComponent } from './component/empviewdetails/empviewdetails.component';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:"/dashboard",pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'employeelogin',component:EmployeeLoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'dashboardOne',component:DashboardOneComponent},
  {path:'empviewdetails',component:EmpviewdetailsComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
