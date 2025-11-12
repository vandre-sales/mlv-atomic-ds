// src/app/core/services/css-generator.service.ts
import { Injectable, inject } from '@angular/core';
import { IDesignTokens, IPrimitiveTokens, ISemanticTokens } from '../models/design-tokens.interface';
import { TokenResolverService } from './token-resolver.service';

@Injectable({
  providedIn: 'root',
})
export class CssGeneratorService {
  private tokenResolver = inject(TokenResolverService);

  /**
   * Gera a string CSS completa a partir do objeto de design tokens.
   */
  public generateCssString(tokens: IDesignTokens): string {
    if (!tokens || !tokens.primitives || !tokens.semantics) {
      return '';
    }

    const primitiveCss = this.generatePrimitiveVariables(tokens.primitives);
    const semanticCss = this.generateSemanticVariables(tokens.semantics, tokens);
    
    // Stubs para futuras implementações
    const buttonCss = this.generateButtonStyles(tokens);
    const markdownCss = this.generateMarkdownStyles(tokens);

    return `
:root {
${primitiveCss}
${semanticCss}
}

${buttonCss}
${markdownCss}
    `.trim();
  }

  /**
   * Gera as variáveis CSS da camada privada (ex: --mlv-color-blue-500: #3b82f6;).
   */
  private generatePrimitiveVariables(primitives: IPrimitiveTokens): string {
    let cssText = '  /* Primitive Tokens */\n';
    
    // Processa cores
    if (primitives.colors) {
      for (const category in primitives.colors) {
        for (const shade in primitives.colors[category]) {
          const varName = `--mlv-color-${category}-${shade}`;
          cssText += `  ${varName}: ${primitives.colors[category][shade]};\n`;
        }
      }
    }
    
    // Processa espaçamento
    if (primitives.spacing) {
        for (const key in primitives.spacing) {
            const varName = `--mlv-space-${key}`;
            cssText += `  ${varName}: ${primitives.spacing[key]};\n`;
        }
    }

    return cssText;
  }

  /**
   * Gera as variáveis CSS da camada pública/semântica (ex: --color-primary: var(--mlv-color-blue-500);).
   */
  private generateSemanticVariables(semantics: ISemanticTokens, allTokens: IDesignTokens): string {
    let cssText = '  /* Semantic Tokens */\n';

    if (semantics.colors) {
      for (const key in semantics.colors) {
        const alias = semantics.colors[key];
        // O nome da variável semântica é convertida para kebab-case. Ex: backgroundPrimary -> --color-background-primary
        const varName = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        const resolvedValue = this.tokenResolver.resolveTokenAlias(alias, allTokens);
        cssText += `  ${varName}: ${resolvedValue};\n`;
      }
    }

    return cssText;
  }
  
  // Placeholder para Épico 2
  private generateButtonStyles(tokens: IDesignTokens): string {
    return '/* Button component styles will be generated here */';
  }
  
  // Placeholder para Épico 2
  private generateMarkdownStyles(tokens: IDesignTokens): string {
    return '/* Markdown component styles will be generated here */';
  }
}
