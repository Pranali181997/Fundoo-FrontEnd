import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/Services/note/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
noteList:any
  constructor(private note:NoteService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.GetAllNotes();
  }
  GetAllNotes(){
    this.note.getNote().subscribe((response:any)=>{
      console.log(response);
      this.noteList=response.data;
      this.noteList = this.noteList.filter((object:any)=>{
        return object.isArchive===true

      })
    })
  }
  archiveMessage(event: any) {
    this.GetAllNotes();
  }
}
