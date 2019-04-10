/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TwitchService } from './twitch.service';

describe('Service: Twitch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitchService]
    });
  });

  it('should ...', inject([TwitchService], (service: TwitchService) => {
    expect(service).toBeTruthy();
  }));
});
