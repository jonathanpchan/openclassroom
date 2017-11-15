import { TestBed, inject } from '@angular/core/testing';

import { StudyBuddyService } from './studybuddy.service';

describe('StudybuddyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudyBuddyService]
    });
  });

  it('should ...', inject([StudyBuddyService], (service: StudyBuddyService) => {
    expect(service).toBeTruthy();
  }));
});
