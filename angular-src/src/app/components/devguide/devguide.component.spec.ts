import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevguideComponent } from './devguide.component';

describe('DevguideComponent', () => {
  let component: DevguideComponent;
  let fixture: ComponentFixture<DevguideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevguideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevguideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
