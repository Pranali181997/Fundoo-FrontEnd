
import { HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpService/http.service';
//import { HttpServiceService } from '../ttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base=environment.baseUrl;

  constructor(private httpService:HttpService) { }

  registration(data:any){
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json-patch+json'
      })
    }
return this.httpService.postService(this.base+`User/Register`,data,false,
  header);
}
login(data:any){
  let header={
    headers:new HttpHeaders({
      'Content-Type': 'application/json-patch+json'
    })
  }
return this.httpService.postService(this.base+`User/Login/${data.Email}/${data.Password}`, {} ,false,header)

}
ForgetPassword(data:any){
  let header={
    headers:new HttpHeaders({
      'content-type': 'application/json'
    })
  }
return this.httpService.postService(this.base+`User/ForgetPassword/${data.email}`, {} ,false,header)

}

ChangePassword(data:any,token:any){
  let header={
    headers:new HttpHeaders({
      'content-type': 'application/json',
      'Authorization':`Bearer ${token}`
    })
  }
return this.httpService.putService(this.base+`User/ChangePassword/${data.password}/${data.confirmpassword}`, {} ,true,header)
//return this.httpService.putService(this.base+'User/ChangePassword',data,true,header)

}
}

