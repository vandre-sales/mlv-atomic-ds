// src/app/core/services/token-resolver.service.ts
import { Injectable } from '@angular/core';
import { IDesignTokens } from '../models/design-tokens.interface';

@Injectable({
  providedIn: 'root',
})
export class TokenResolverService {
  /**
   * Resolve um alias de token (ex: 'blue.500') para sua referência de variável CSS.
   * @param alias O alias a ser resolvido.
   * @param tokens O objeto de tokens de design (atualmente não utilizado, mas incluído para futuras expansões).
   * @returns A string da variável CSS correspondente.
   */
  public resolveTokenAlias(alias: string, tokens: IDesignTokens): string {
    // A lógica atual é uma tradução direta, pois os tokens semânticos são aliases dos primitivos.
    // Ex: 'blue.500' se torna '--mlv-color-blue-500'
    const parts = alias.split('.');
    const cssVarName = `--mlv-color-${parts.join('-')}`;
    return `var(${cssVarName})`;
  }
}
