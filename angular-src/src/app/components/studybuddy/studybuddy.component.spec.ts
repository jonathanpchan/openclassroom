import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudybuddyComponent } from './studybuddy.component';

describe('StudybuddyComponent', () => {
  let component: StudybuddyComponent;
  let fixture: ComponentFixture<StudybuddyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudybuddyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudybuddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
