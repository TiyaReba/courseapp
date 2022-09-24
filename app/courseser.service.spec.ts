import { TestBed } from '@angular/core/testing';

import { CourseserService } from './courseser.service';

describe('CourseserService', () => {
  let service: CourseserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
