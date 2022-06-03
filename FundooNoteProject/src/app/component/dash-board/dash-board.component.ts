import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatGridList } from '@angular/material/grid-list';
import { DataService } from 'src/app/Services/data/data.service';
import { GridListDataService } from 'src/app/Services/gridListData/grid-list-data.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnDestroy {
  grid = false;
  formatGridList = false;

  mobileQuery: MediaQueryList;
  text = ''; //initialised the text variable
  // filteredString: string = '';


  fillerNav = Array.from({ length: 1}, (_, i) => `Note ${i + 1}`);

  fillerContent = Array.from(
    { length: 50 },
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
         .`,
  );

  private _mobileQueryListener: () => void;
  // nextData: any;
  search:any;
  c:boolean=false;
 

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router,private dataService:DataService,private nextData: GridListDataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
SearchProp(el: HTMLElement, color: string) {
    el.style.backgroundColor = color;
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


  filter(filteredString:any)
  {
      this.nextData.dataPipe(filteredString.target.value);
  }
  keyFun(event:any){
    console.log("event" ,event.target.value) 
    this.dataService.changeMessage(event.target.value)
   }
   logout(){
     localStorage.removeItem('token');
     this.router.navigateByUrl("/log-in")
     console.log("successfully logout !!");
   }
   FormatView() {
    if (this.formatGridList == false) {
      this.formatGridList = true
      return this.formatGridList
    }
    else {
      this.formatGridList = false
      return this.formatGridList
    }
  }
  formatListView() {
    this.grid = true
    this.nextData.nextDataUpdate(this.FormatView().valueOf())
    console.log("value= ", this.FormatView().valueOf())
  }
  formatGridView() {
    this.grid = false
    this.nextData.nextDataUpdate(this.FormatView().valueOf())
    console.log("value ", this.FormatView())
  }
}

     


