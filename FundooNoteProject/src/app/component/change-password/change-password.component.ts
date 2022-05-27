import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/userService/user.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  ChangePasswordForm !: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService, private activeRoute:ActivatedRoute,private _snackBar: MatSnackBar) { }
token:any
  ngOnInit(): void {
    this.ChangePasswordForm = this.formBuilder.group({
    
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],
    });
    this.token = this.activeRoute.snapshot.paramMap.get('token');
  }
  onSubmit() {
    this.submitted = true;
    console.log("inside submit")
    if (this.ChangePasswordForm.valid) {
      console.log("valid data", this.ChangePasswordForm.value);
      let data = {

        password: this.ChangePasswordForm.value.password,
        confirmpassword: this.ChangePasswordForm.value.confirmpassword
      }
      this.user.ChangePassword(data,this.token).subscribe((res: any) => {
        console.log(res);
        this._snackBar.open('Password changed successfully..', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      },error=>{
        this._snackBar.open('Failed to change password', '', {
        duration: 2000,
        verticalPosition: 'bottom'

        });
      }
      )
    }
    else {
      console.log("Invalid data", this.ChangePasswordForm.value);
    }
  }
}