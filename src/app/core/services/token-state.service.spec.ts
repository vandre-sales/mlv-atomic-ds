// src/app/core/services/token-state.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { TokenStateService } from './token-state.service';
import { PersistenceService } from './persistence.service';

describe('TokenStateService', () => {
  let service: TokenStateService;
  let persistenceService: PersistenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenStateService, PersistenceService],
    });
    service = TestBed.inject(TokenStateService);
    persistenceService = TestBed.inject(PersistenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
