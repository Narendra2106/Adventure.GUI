import { TestBed } from '@angular/core/testing';

import { MyAdventureService } from './my-adventure.service';

describe('MyAdventureService', () => {
  let service: MyAdventureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyAdventureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
