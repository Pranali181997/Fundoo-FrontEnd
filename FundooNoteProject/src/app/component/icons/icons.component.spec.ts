import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { IconsComponent } from './icons.component';

describe('IconsComponent', () => {
  let component: IconsComponent;
  let fixture: ComponentFixture<IconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsComponent ],
      imports:[HttpClientModule,MatSnackBarModule,MatDialogModule,AppRoutingModule,MatMenuModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have LifeCycle', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
  it('should create archive', () => {
    expect(component.archieve).toBeTruthy();
  });
  it('should have change color', () => {
    fixture.detectChanges();
    expect(component.changeColor).toBeTruthy();
  });
  it('should have restore', () => {
    expect(component.restore).toBeTruthy();
  });
  it('should have trash', () => {
    expect(component.trash).toBeTruthy();
  });
});
