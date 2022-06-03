import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { matSnackBarAnimations, MatSnackBarModule } from '@angular/material/snack-bar';

import { CreateNoteComponent } from './create-note.component';

describe('CreateNoteComponent', () => {
  let component: CreateNoteComponent;
  let fixture: ComponentFixture<CreateNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNoteComponent ],
      imports:[HttpClientModule,MatSnackBarModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Show method', () => {
    expect(component.show).toBeTruthy();
  });
  it('close method', () => {
    expect(component.close).toBeTruthy();
  });
  it('Show method', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
});
