import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstAdventureComponent } from './first-adventure.component';

describe('FirstAdventureComponent', () => {
  let component: FirstAdventureComponent;
  let fixture: ComponentFixture<FirstAdventureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstAdventureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstAdventureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
