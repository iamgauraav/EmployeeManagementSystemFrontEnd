import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin/admin.service';


@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgetpasswordForm!: FormGroup;
  submitted = false;
  

  constructor(private formBuilder:FormBuilder, private user:AdminService) { }

  ngOnInit(): void {
    this.forgetpasswordForm = this.formBuilder.group({
     
      email: ['', [Validators.required, Validators.email]],
    })
  }
  onSubmit(){
    console.log(this.forgetpasswordForm.value);
    if(this.forgetpasswordForm.valid){
      console.log("do api call",this.forgetpasswordForm);
      let data={
        email:this.forgetpasswordForm.value.email
      }
      this.user.forgetpassword(data).subscribe((response:any)=>{
        console.log(response);
      })
    }else{
      console.log("invalid data",this.forgetpasswordForm.value);
    }
  
  
  }

}
