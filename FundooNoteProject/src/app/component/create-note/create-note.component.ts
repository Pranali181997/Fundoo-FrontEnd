import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/Services/note/note.service';
import {  ViewChild} from '@angular/core';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  isShow = false
  title: any
  name:any;
  description: any
  @Output() messageEvent = new EventEmitter<string>();
  color: any;
  
  constructor(private note: NoteService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  show() {
    this.isShow = true
  }
  close() {
    this.isShow = false
    console.log(this.title, this.description)
    let data = {
      "title": this.title,
      "description": this.description,
      "bgColor": "red",
      "isArchive": false,
      "isReminder": false,
      "isPin": false,
      "isTrash": false,
      "registerdDate": "2022-05-17T06:11:22.623Z"
    }
    this.note.addNote(data).subscribe((result: any) => {
      console.log("result" ,result);
      this.messageEvent.emit("Hello")
      this._snackBar.open('Note Created successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
      this.title=""
      this.description=""
    }, error => this._snackBar.open('Both Title and Description should not be empty', '', {
      duration: 3000,
      verticalPosition: 'bottom'
    })
    )
  }
}


