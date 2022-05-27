import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],    
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
     // adress: ['', Validators.required],
  });
  }
  onSubmit() {
console.log("inside submit")
if(this.registerForm.valid){
  console.log("valid data",this.registerForm.value);
  let data={
      firstName:this.registerForm.value.firstName,
      lastName: this.registerForm.value.lastName,  
      email: this.registerForm.value.email,
      adress: this.registerForm.value.adress,
      password: this.registerForm.value.password,     
      confirmPassword: this.registerForm.value.confirmPassword     
  }
  this.user.registration(data).subscribe((res:any)=>{
  console.log(res);
})
}
else{
  console.log("Invalid data",this.registerForm.value);
}
  }
}
