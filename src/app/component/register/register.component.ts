import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  hide = true;
  actionBtn:string="Save";

  
  constructor(private formBuilder: FormBuilder, private admin: AdminService, 
    @Inject(MAT_DIALOG_DATA) public editData:any,
  private dialogRef:MatDialogRef<RegisterComponent>
    ) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      Name :['',Validators.required],
      FatherName:['',Validators.required],
      DateOfBirth:['',Validators.required],
      DateOfJoining:['', [Validators.required, Validators.minLength(6)]],
      Designation :['',Validators.required],
      CommunicationAddress:['',Validators.required],
      ParmanentAddress :['',Validators.required],
      ContactNumber:['',Validators.required],
      EmailId:['',Validators.required],
      Salary:['',Validators.required],
      Email:['',Validators.required],
      Password:['', [Validators.required, Validators.minLength(6)]],

     });

     if (this.editData) {
      this.actionBtn = "update";
      this.registerForm.controls['Name'].setValue(this.editData.name);
      this.registerForm.controls['FatherName'].setValue(this.editData.fatherName);
      this.registerForm.controls['DateOfBirth'].setValue(this.editData.dateOfBirth);
      this.registerForm.controls['DateOfJoining'].setValue(this.editData.dateOfJoining);
      this.registerForm.controls['Designation'].setValue(this.editData.designation);
      this.registerForm.controls['CommunicationAddress'].setValue(this.editData.communicationAddress);
      this.registerForm.controls['ParmanentAddress'].setValue(this.editData.parmanentAddress);
      this.registerForm.controls['ContactNumber'].setValue(this.editData.contactNumber);
      this.registerForm.controls['EmailId'].setValue(this.editData.emailId);
      this.registerForm.controls['Salary'].setValue(this.editData.salary);
      this.registerForm.controls['Email'].setValue(this.editData.email);
      this.registerForm.controls['Password'].setValue(this.editData.password);
    }
  }

  registerEmployee() {
    console.log(this.registerForm.value);
    if (!this.editData) {
      if (this.registerForm.valid) {
        this.admin.Register(this.registerForm.value)
          .subscribe({
            next: (res) => {
              alert("Employee Added Successfully");
              this.registerForm.reset();
              this.dialogRef.close("save");
            },
            error: () => {
              alert("Error While Adding the Employee record");
            }
          })
      }
    }
    else {
      this.updateEmployee()
    }

  }
  updateEmployee() {
    this.admin.updateEmployee(this.registerForm.value, this.editData.employeeId).subscribe({
      next: (res) => {
        alert("Employee updated Successfully!!!");
        this.registerForm.reset();
        this.dialogRef.close("update");
      },
      error: () => {
        alert("Error While updating the Employee record");
      }
    })
  }


}
