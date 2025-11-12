// src/app/core/services/token-orchestrator.service.ts
import { Injectable, inject } from '@angular/core';
import { TokenStateService } from './token-state.service';
import { PaletteGenerationService } from './palette-generation.service';
import { IDesignTokens } from '../models/design-tokens.interface';

@Injectable({
  providedIn: 'root',
})
export class TokenOrchestratorService {
  private tokenState = inject(TokenStateService);
  private paletteGenerator = inject(PaletteGenerationService);

  /**
   * Atualiza um valor de token com base em um caminho e aplica a lógica de negócios necessária.
   * @param path O caminho para o token a ser atualizado (ex: 'primitives.colors.blue.500').
   * @param newValue O novo valor para o token.
   */
  public updateTokenValue(path: string, newValue: any): void {
    const currentTokens = this.tokenState.tokensAsReadonly();
    const newTokens: IDesignTokens = JSON.parse(JSON.stringify(currentTokens)); // Deep copy

    // Lógica de Negócios: Se a atualização for em uma cor base, regenere a paleta inteira.
    if (path.startsWith('primitives.colors') && path.endsWith('.500')) {
      const pathParts = path.split('.'); // ['primitives', 'colors', 'blue', '500']
      const colorName = pathParts[2];
      
      const newPalette = this.paletteGenerator.generatePalette(newValue);
      newTokens.primitives.colors[colorName] = newPalette;

    } else {
      // Lógica para atualização de qualquer outro valor aninhado.
      const pathParts = path.split('.');
      let currentLevel: any = newTokens;

      for (let i = 0; i < pathParts.length - 1; i++) {
        currentLevel = currentLevel[pathParts[i]];
        if (currentLevel === undefined) {
          console.error(`Invalid token path: ${path}`);
          return;
        }
      }

      currentLevel[pathParts[pathParts.length - 1]] = newValue;
    }

    this.tokenState.updateTokens(newTokens);
  }
}
