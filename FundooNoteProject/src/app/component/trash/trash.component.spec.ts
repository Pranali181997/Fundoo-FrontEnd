import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashComponent } from './trash.component';

describe('TrashComponent', () => {
  let component: TrashComponent;
  let fixture: ComponentFixture<TrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashComponent ],
      imports:[HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('LifeCycle', () => {
    expect(component.ngOnInit).toBeTruthy();
  });
  it('Get all notes', () => {
    expect(component.GetAllNotes).toBeTruthy();
  });
  it('Display message', () => {
    expect(component.archiveMessage).toBeTruthy();
  });
});
