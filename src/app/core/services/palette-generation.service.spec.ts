// src/app/core/services/palette-generation.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { PaletteGenerationService } from './palette-generation.service';

describe('PaletteGenerationService', () => {
  let service: PaletteGenerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaletteGenerationService],
    });
    service = TestBed.inject(PaletteGenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve gerar uma paleta de 11 cores a partir de uma cor base', () => {
    const baseColor = '#3b82f6'; // Um azul conhecido
    const palette = service.generatePalette(baseColor);

    // Verifica se a paleta contém todas as chaves esperadas
    const expectedKeys = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
    expect(Object.keys(palette)).toEqual(expectedKeys);

    // Verifica se a cor base (500) está correta
    expect(palette['500']).toBe(baseColor);

    // Verifica se uma das cores geradas é um hexadecimal válido
    expect(palette['100']).toMatch(/^#[0-9a-f]{6}$/i);
  });

  it('deve lançar um erro para uma cor base inválida', () => {
    expect(() => service.generatePalette('invalid-color')).toThrowError('Invalid base color: invalid-color');
  });
});
