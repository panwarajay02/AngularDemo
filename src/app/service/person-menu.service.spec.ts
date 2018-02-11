import { TestBed, inject } from '@angular/core/testing';

import { PersonMenuService } from './person-menu.service';

describe('PersonMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonMenuService]
    });
  });

  it('should be created', inject([PersonMenuService], (service: PersonMenuService) => {
    expect(service).toBeTruthy();
  }));
});
