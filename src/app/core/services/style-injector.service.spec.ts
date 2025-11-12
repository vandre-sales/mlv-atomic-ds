// src/app/core/services/style-injector.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';
import { StyleInjectorService } from './style-injector.service';

describe('StyleInjectorService', () => {
  let service: StyleInjectorService;
  let document: Document;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StyleInjectorService],
    });
    service = TestBed.inject(StyleInjectorService);
    document = TestBed.inject(DOCUMENT);
  });

  afterEach(() => {
    // Limpa os elementos de estilo criados após cada teste
    const styleElement = document.getElementById('test-style');
    if (styleElement) {
      styleElement.remove();
    }
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve criar um novo elemento <style> se ele não existir', () => {
    const css = '.test { color: red; }';
    const styleId = 'test-style';

    let styleElement = document.getElementById(styleId);
    expect(styleElement).toBeNull();

    service.injectCss(css, styleId);

    styleElement = document.getElementById(styleId);
    expect(styleElement).not.toBeNull();
    expect(styleElement?.tagName).toBe('STYLE');
    expect(styleElement?.textContent).toBe(css);
  });

  it('deve atualizar o conteúdo de um elemento <style> existente', () => {
    const initialCss = '.initial { color: blue; }';
    const updatedCss = '.updated { color: green; }';
    const styleId = 'test-style';

    // Cria o elemento inicial
    const styleElement = document.createElement('style');
    styleElement.id = styleId;
    styleElement.textContent = initialCss;
    document.head.appendChild(styleElement);

    expect(styleElement.textContent).toBe(initialCss);

    // Atualiza o conteúdo
    service.injectCss(updatedCss, styleId);
    
    expect(styleElement.textContent).toBe(updatedCss);
    
    // Garante que não foi criado um novo elemento
    const allStyleElements = document.querySelectorAll(`#${styleId}`);
    expect(allStyleElements.length).toBe(1);
  });
});
