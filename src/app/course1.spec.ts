import { TestBed } from '@angular/core/testing';

import { Course1 } from './course1';

describe('Course1', () => {
  let service: Course1;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Course1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
