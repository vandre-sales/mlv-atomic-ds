// src/app/core/services/design-token.service.ts
import { Injectable, effect, inject } from '@angular/core';
import { TokenStateService } from './token-state.service';
import { CssGeneratorService } from './css-generator.service';
import { StyleInjectorService } from './style-injector.service';

@Injectable({
  providedIn: 'root',
})
export class DesignTokenService {
  private tokenState = inject(TokenStateService);
  private cssGenerator = inject(CssGeneratorService);
  private styleInjector = inject(StyleInjectorService);

  constructor() {
    // O 'Maestro' effect.
    // Este effect orquestra todo o pipeline de atualização de estilo.
    effect(() => {
      // 1. Ouve o estado dos tokens.
      const currentTokens = this.tokenState.tokensAsReadonly();

      // 2. Passa os tokens para o gerador de CSS.
      const cssString = this.cssGenerator.generateCssString(currentTokens);

      // 3. Injeta a string CSS gerada no DOM.
      this.styleInjector.injectCss(cssString, 'design-tokens');
    });
  }
}
