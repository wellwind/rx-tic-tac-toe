import { TestBed, inject } from '@angular/core/testing';

import { GameCoreService } from './game-core.service';

describe('GameCoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameCoreService]
    });
  });

  it('should be created', inject([GameCoreService], (service: GameCoreService) => {
    expect(service).toBeTruthy();
  }));
});
