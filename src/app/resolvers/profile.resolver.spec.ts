import { TestBed } from '@angular/core/testing';

import { ProfileResolver } from './profile.resolver';

describe('ProfileResolver', () => {
	let service: ProfileResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
	  service = TestBed.inject(ProfileResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
