/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MatchesService } from './matches.service';

describe('Service: Matches', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchesService]
    });
  });

  it('should ...', inject([MatchesService], (service: MatchesService) => {
    expect(service).toBeTruthy();
  }));
});
