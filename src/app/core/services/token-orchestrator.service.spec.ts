// src/app/core/services/token-orchestrator.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { TokenOrchestratorService } from './token-orchestrator.service';
import { TokenStateService } from './token-state.service';
import { PaletteGenerationService } from './palette-generation.service';

describe('TokenOrchestratorService', () => {
  let service: TokenOrchestratorService;
  let tokenState: TokenStateService;
  let paletteGenerator: PaletteGenerationService;

  const initialTokens = {
    primitives: {
      colors: {
        blue: {
          '500': '#0000ff'
        },
      },
      spacing: {
        sm: '8px'
      }
    },
    semantics: {
      colors: {}
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TokenOrchestratorService,
        TokenStateService,
        PaletteGenerationService,
      ],
    });
    service = TestBed.inject(TokenOrchestratorService);
    tokenState = TestBed.inject(TokenStateService);
    paletteGenerator = TestBed.inject(PaletteGenerationService);

    // Define um estado inicial para os tokens antes de cada teste
    tokenState.updateTokens(JSON.parse(JSON.stringify(initialTokens)));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve regenerar a paleta inteira ao atualizar uma cor base (.500)', () => {
    const newBaseColor = '#ff0000'; // Vermelho
    const path = 'primitives.colors.blue.500';
    
    // Espiona o PaletteGenerationService para garantir que ele seja chamado
    const paletteSpy = spyOn(paletteGenerator, 'generatePalette').and.callThrough();
    const updateSpy = spyOn(tokenState, 'updateTokens');

    service.updateTokenValue(path, newBaseColor);

    expect(paletteSpy).toHaveBeenCalledWith(newBaseColor);
    
    // Verifica se o updateTokens foi chamado com a paleta nova
    const updatedTokens = updateSpy.calls.mostRecent().args[0];
    expect(updatedTokens.primitives.colors['blue']['500']).toBe(newBaseColor);
    expect(updatedTokens.primitives.colors['blue']['100']).toBeDefined(); // Verifica se a paleta foi gerada
  });

  it('deve atualizar um valor de token simples que não é uma cor base', () => {
    const newSpacing = '12px';
    const path = 'primitives.spacing.sm';

    const paletteSpy = spyOn(paletteGenerator, 'generatePalette');
    const updateSpy = spyOn(tokenState, 'updateTokens');

    service.updateTokenValue(path, newSpacing);

    // Garante que a geração de paleta NÃO foi chamada
    expect(paletteSpy).not.toHaveBeenCalled();

    // Verifica se o valor foi simplesmente atualizado
    const updatedTokens = updateSpy.calls.mostRecent().args[0];
    expect(updatedTokens.primitives.spacing['sm']).toBe(newSpacing);
  });
});
