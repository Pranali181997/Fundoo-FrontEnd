import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { DataService } from 'src/app/Services/data/data.service';
import { GridListDataService } from 'src/app/Services/gridListData/grid-list-data.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  note: any

  @Output() DisplayEvent = new EventEmitter<string>();
  @Input()recievedNoteList:any;
  @Output() displayEvent = new EventEmitter<string>();

  
  displayMessage = "note refresh"
 
  searchTitle: any;
  gridList: any;
  constructor(public dialog: MatDialog, private dataService: DataService,private nextData:GridListDataService) {
    
  }
  ngOnInit(): void {
   
 this.nextData.store.subscribe(a=>this.gridList=a)
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
      this.displayEvent.emit("Hello")

    });
  }

  updateMessage(event:any){
    this.displayEvent.emit("Hello")
 }
}