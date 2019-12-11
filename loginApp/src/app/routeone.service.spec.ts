import { TestBed } from '@angular/core/testing';

import { RouteoneService } from './routeone.service';

describe('RouteoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteoneService = TestBed.get(RouteoneService);
    expect(service).toBeTruthy();
  });
});
