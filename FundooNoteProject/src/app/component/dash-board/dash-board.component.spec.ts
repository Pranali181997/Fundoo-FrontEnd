import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { DashBoardComponent } from './dash-board.component';

fdescribe('DashBoardComponent', () => {
  let component: DashBoardComponent;
  let fixture: ComponentFixture<DashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBoardComponent ],
      imports:[AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create keyFunction', () => {
    expect(component.keyFun).toBeTruthy();
  });
  it('should create Logout', () => {
    expect(component.logout).toBeTruthy();
  });
  it('should have ngOnDestroy', () => {
    expect(component.ngOnDestroy).toBeTruthy();
  });
  it('should create formatView', () => {
    expect(component.FormatView).toBeTruthy();
  });
  it('should create formatGridView', () => {
    expect(component.formatGridView).toBeTruthy();
  });
  it('should create formatListView', () => {
    expect(component.formatGridView).toBeTruthy();
  });
});
