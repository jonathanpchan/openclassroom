import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindHomeComponent } from './find-home.component';

describe('FindHomeComponent', () => {
  let component: FindHomeComponent;
  let fixture: ComponentFixture<FindHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
