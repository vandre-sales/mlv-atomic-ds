// src/app/core/services/css-generator.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { CssGeneratorService } from './css-generator.service';
import { TokenResolverService } from './token-resolver.service';
import { IDesignTokens } from './token-state.service';

describe('CssGeneratorService', () => {
  let service: CssGeneratorService;

  const mockTokens: IDesignTokens = {
    primitives: {
      colors: {
        blue: {
          '500': '#3b82f6',
        },
        neutral: {
          'white': '#ffffff',
        }
      },
      spacing: {
        'sm': '8px',
      }
    },
    semantics: {
      colors: {
        'backgroundPrimary': 'neutral.white',
        'colorPrimary': 'blue.500',
      }
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CssGeneratorService, TokenResolverService],
    });
    service = TestBed.inject(CssGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve gerar variáveis primitivas de cor e espaçamento', () => {
    const css = service.generateCssString(mockTokens);
    expect(css).toContain('--mlv-color-blue-500: #3b82f6;');
    expect(css).toContain('--mlv-space-sm: 8px;');
  });
  
  it('deve gerar variáveis semânticas resolvendo aliases', () => {
    const css = service.generateCssString(mockTokens);
    expect(css).toContain('--color-background-primary: var(--mlv-color-neutral-white);');
    expect(css).toContain('--color-primary: var(--mlv-color-blue-500);');
  });

  it('deve retornar uma string vazia se os tokens forem nulos ou incompletos', () => {
    expect(service.generateCssString({})).toBe('');
    expect(service.generateCssString({ primitives: {} } as any)).toBe('');
    expect(service.generateCssString({ semantics: {} } as any)).toBe('');
  });
});
