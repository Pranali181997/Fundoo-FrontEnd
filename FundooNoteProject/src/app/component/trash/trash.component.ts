import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/Services/note/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
noteList:any
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.GetAllNotes();
  }
  GetAllNotes(){
    this.note.getNote().subscribe((res:any)=>{
      console.log(res.data);
      this.noteList=res.data;
      this.noteList.reverse();

      this.noteList = this.noteList.filter((object:any)=>{
        return object.isTrash===true

      })
      console.log(this.noteList)
    }
    
  )}
  archiveMessage(event:any){
    this.GetAllNotes();
  }
}