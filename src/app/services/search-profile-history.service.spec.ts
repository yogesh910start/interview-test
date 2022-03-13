import { TestBed } from '@angular/core/testing';

import { SearchProfileHistoryService } from './search-profile-history.service';

describe('SearchProfileHistoryService', () => {
  let service: SearchProfileHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchProfileHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
