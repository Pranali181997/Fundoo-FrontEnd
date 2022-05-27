import { TestBed } from '@angular/core/testing';

import { GridListDataService } from './grid-list-data.service';

describe('GridListDataService', () => {
  let service: GridListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GridListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
