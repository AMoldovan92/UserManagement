import { TestBed } from '@angular/core/testing';

import { UserListService } from './user-list-service.service';

describe('UserListServiceService', () => {
  let service: UserListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
