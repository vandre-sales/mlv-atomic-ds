// src/app/core/services/token-resolver.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { TokenResolverService } from './token-resolver.service';
import { IDesignTokens } from './token-state.service';

describe('TokenResolverService', () => {
  let service: TokenResolverService;
  const mockTokens: IDesignTokens = {}; // Mock, pois a função é pura e não depende dele atualmente.

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenResolverService],
    });
    service = TestBed.inject(TokenResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve resolver um alias de cor simples para a variável CSS correta', () => {
    const alias = 'blue.500';
    const expectedVar = 'var(--mlv-color-blue-500)';
    expect(service.resolveTokenAlias(alias, mockTokens)).toBe(expectedVar);
  });

  it('deve resolver um alias de cor com múltiplos segmentos', () => {
    const alias = 'neutral.gray.900';
    const expectedVar = 'var(--mlv-color-neutral-gray-900)';
    expect(service.resolveTokenAlias(alias, mockTokens)).toBe(expectedVar);
  });
});
