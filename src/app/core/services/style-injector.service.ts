// src/app/core/services/style-injector.service.ts
import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class StyleInjectorService {
  private document = inject(DOCUMENT);

  /**
   * Injeta uma string de CSS em um elemento <style> na <head> do documento.
   * Cria o elemento se ele não existir, ou atualiza um existente.
   * @param cssString A string CSS a ser injetada.
   * @param id O ID do elemento <style> para identificar e reutilizar.
   */
  public injectCss(cssString: string, id: string): void {
    const head = this.document.head;
    let styleElement = this.document.getElementById(id) as HTMLStyleElement | null;

    if (!styleElement) {
      styleElement = this.document.createElement('style');
      styleElement.id = id;
      head.appendChild(styleElement);
    }

    styleElement.textContent = cssString;
  }
}
