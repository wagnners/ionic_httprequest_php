import { TestBed } from '@angular/core/testing';

import { MovieRequestService } from './movie-request.service';

describe('MovieRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieRequestService = TestBed.get(MovieRequestService);
    expect(service).toBeTruthy();
  });
});
