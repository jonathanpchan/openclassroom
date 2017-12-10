import { TestBed, inject } from '@angular/core/testing';

import { RoomInfoService } from './roominfo.service';

describe('RoominfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoomInfoService]
    });
  });

  it('should ...', inject([RoomInfoService], (service: RoomInfoService) => {
    expect(service).toBeTruthy();
  }));
});
