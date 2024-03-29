import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  base = environment.baseUrl;
  token: any;
  constructor(private httpservice: HttpService) {
    this.token = localStorage.getItem(`token`)
  }
  addNote(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.postService(this.base + 'Note/AddNote', data, true, header)
  }
  getNote() {

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.getService(this.base + 'Note/GetAllNotes', true, header)
  }
  updateService(data: any, noteId: any) {
    console.log("token", this.token,data,noteId);

    let header = {
   
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log("update")
    return this.httpservice.putService(this.base + `Note/UpdateNote/${noteId}`, data, true, header)
   
  }
  archiveNoteService(noteId: any) {
    console.log("token", this.token);

    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.putService(this.base + `Note/ArchieveNote/${noteId}`, {}, true, header)
  }
   deleteNote(noteId:any){
    console.log("token",this.token);

    let header ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization':'Bearer '+this.token  
      })
    }
    return this.httpservice.deleteService(this.base+`Note/DeleteNote/${noteId}`,true,header)
   }
   trashNote(noteId:any, data:any){
    console.log("token",this.token);

    let header ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization':'Bearer '+this.token  
      })
    }
    return this.httpservice.putService(this.base+`Note/IsTrash${noteId}`,data,true,header)
   }
   changeColor( noteId: any,color:any) {

    console.log("token", this.token)
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.putService(this.base + `Note/ChangeColorNote/${noteId}?color=${color}`,{}, true, header)
  }
}