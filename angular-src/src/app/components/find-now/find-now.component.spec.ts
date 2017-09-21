import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindNowComponent } from './find-now.component';

describe('FindNowComponent', () => {
  let component: FindNowComponent;
  let fixture: ComponentFixture<FindNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
