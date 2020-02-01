import { TestBed } from '@angular/core/testing';

import { ConnectionBaseService } from './connection-base.service';

describe('ConnectionBaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectionBaseService = TestBed.get(ConnectionBaseService);
    expect(service).toBeTruthy();
  });
});
