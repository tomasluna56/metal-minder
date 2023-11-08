import { TestBed } from '@angular/core/testing';

import { MaterialOptionsService } from './material-options.service';

describe('MaterialOptionsService', () => {
  let service: MaterialOptionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterialOptionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
