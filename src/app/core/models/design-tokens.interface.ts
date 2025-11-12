// src/app/core/models/design-tokens.interface.ts

/**
 * A estrutura raiz que encapsula todos os design tokens.
 */
export interface IDesignTokens {
  primitives: IPrimitiveTokens;
  semantics: ISemanticTokens;
}

/**
 * Define os tokens primitivos, que são os valores brutos e fundamentais do sistema.
 */
export interface IPrimitiveTokens {
  colors: { [paletteName: string]: { [shade: string]: string } }; // Ex: { blue: { '500': '#3b82f6' } }
  spacing: { [key: string]: string }; // Ex: { sm: '8px' }
  // Futuras primitivas: typography, shadows, etc.
}

/**
 * Define os tokens semânticos, que são aliases que apontam para tokens primitivos,
 * adicionando contexto de uso.
 */
export interface ISemanticTokens {
  colors: { [key: string]: string }; // Ex: { backgroundPrimary: 'neutral.white' }
  // Futuras semânticas: typography, etc.
}
