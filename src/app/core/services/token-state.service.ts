// src/app/core/services/token-state.service.ts
import { Injectable, signal, effect, inject } from '@angular/core';
import { PersistenceService } from './persistence.service';
import { IDesignTokens } from '../models/design-tokens.interface';

@Injectable({
  providedIn: 'root',
})
export class TokenStateService {
  private persistenceService = inject(PersistenceService);

  // Definição da signal privada que armazena o estado
  private tokens = signal<IDesignTokens>({} as IDesignTokens);

  // Exposição da signal pública como readonly para proteger a escrita
  public readonly tokensAsReadonly = this.tokens.asReadonly();

  constructor() {
    this.hydrateState();

    // Efeito que reage a qualquer mudança nos tokens e os persiste
    effect(() => {
      this.persistenceService.setItem('design-tokens', this.tokens());
    });
  }

  /**
   * Hidrata o estado dos tokens a partir do localStorage.
   * Se não houver dados, inicializa com um estado padrão (a ser implementado).
   */
  private hydrateState(): void {
    const storedTokens = this.persistenceService.getItem<IDesignTokens>('design-tokens');
    if (storedTokens) {
      this.tokens.set(storedTokens);
    } else {
      // TODO: Chamar a função `buildDefaultTokens()` que será criada na Parte 0.2
      this.tokens.set({ 
        primitives: { colors: {}, spacing: {} }, 
        semantics: { colors: {} } 
      }); // Estado inicial provisório
    }
  }

  /**
   * Atualiza o estado completo dos tokens.
   * @param newTokens O novo objeto de tokens.
   */
  public updateTokens(newTokens: IDesignTokens): void {
    this.tokens.set(newTokens);
  }
}
