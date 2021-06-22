import { TestBed } from '@angular/core/testing';

import { AsideticService } from './asidetic.service';

describe('AsideticService', () => {
  let service: AsideticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsideticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
