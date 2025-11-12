// src/app/core/services/design-token.service.spec.ts
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { DesignTokenService } from './design-token.service';
import { TokenStateService } from './token-state.service';
import { CssGeneratorService } from './css-generator.service';
import { StyleInjectorService } from './style-injector.service';

describe('DesignTokenService', () => {
  let service: DesignTokenService;
  let tokenState: TokenStateService;
  let cssGenerator: CssGeneratorService;
  let styleInjector: StyleInjectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DesignTokenService,
        TokenStateService,
        CssGeneratorService,
        StyleInjectorService,
      ],
    });

    service = TestBed.inject(DesignTokenService);
    tokenState = TestBed.inject(TokenStateService);
    cssGenerator = TestBed.inject(CssGeneratorService);
    styleInjector = TestBed.inject(StyleInjectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve orquestrar o pipeline quando os tokens mudam', fakeAsync(() => {
    // Espiona os métodos dos serviços dependentes
    const generateSpy = spyOn(cssGenerator, 'generateCssString').and.returnValue('.test { color: blue; }');
    const injectSpy = spyOn(styleInjector, 'injectCss');
    
    // Simula uma atualização nos tokens
    const newTokens = { primitives: { colors: { blue: { '500': '#0000ff' } }, spacing: {} }, semantics: { colors: {} }};
    tokenState.updateTokens(newTokens);
    
    // Avança o tempo para permitir que o effect() seja executado
    tick();

    // Verifica se o pipeline foi executado
    expect(generateSpy).toHaveBeenCalledWith(newTokens);
    expect(injectSpy).toHaveBeenCalledWith('.test { color: blue; }', 'design-tokens');
  }));
});
