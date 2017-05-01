import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindclassroomComponent } from './findclassroom.component';

describe('HomeComponent', () => {
  let component: FindclassroomComponent;
  let fixture: ComponentFixture<FindclassroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindclassroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindclassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
