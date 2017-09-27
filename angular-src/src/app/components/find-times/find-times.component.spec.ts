import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindTimesComponent } from './find-times.component';

describe('FindTimesComponent', () => {
  let component: FindTimesComponent;
  let fixture: ComponentFixture<FindTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
