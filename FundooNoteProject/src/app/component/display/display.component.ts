import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { DataService } from 'src/app/Services/data/data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  note: any

  @Input() recievedNoteList: any;

  @Output() archiveEvent = new EventEmitter<any>();

  @Output() trashEvent = new EventEmitter<any>();
  displayMessage = "note refresh"
  filteredString: string = '';
  searchTitle: any;
  constructor(public dialog: MatDialog, private dataService: DataService) {
    
  }
  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(message => {
      console.log(message)
      this.searchTitle = message
    })
  }
  openDialog(note: any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '600px',
      data: note,
      panelClass: 'my-custom-dialog-class'

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.archiveEvent.emit("Hello")

    });
  }
  receivedMessage(event: any) {
    console.log(event);
    this.archiveEvent.emit(this.displayMessage)
  }
  archiveMessage(event: any) {
    // console.log(event);
    this.archiveEvent.emit("hello")
  }
  trashMessage(event:any)
  { 
    this.trashEvent.emit("hello")     
  }

}