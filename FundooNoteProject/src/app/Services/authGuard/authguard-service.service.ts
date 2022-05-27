import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  constructor() {}  

  gettoken(){
    return !!localStorage.getItem("token");
  }
}

