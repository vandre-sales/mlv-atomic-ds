// src/app/core/services/palette-generation.service.ts
import { Injectable } from '@angular/core';
import { color } from 'd3-color';
import { interpolateRgb } from 'd3-interpolate';

@Injectable({
  providedIn: 'root',
})
export class PaletteGenerationService {
  /**
   * Gera uma paleta de 11 tons a partir de uma cor base hexadecimal.
   * @param baseColorHex A cor base no formato hexadecimal (ex: '#3b82f6').
   * @returns Um objeto representando a paleta de cores.
   */
  public generatePalette(baseColorHex: string): { [key: string]: string } {
    const baseColor = color(baseColorHex);
    if (!baseColor) {
      throw new Error(`Invalid base color: ${baseColorHex}`);
    }

    const white = '#ffffff';
    const black = '#000000';

    // Funções de interpolação
    const lighter = interpolateRgb(white, baseColorHex);
    const darker = interpolateRgb(baseColorHex, black);

    const palette: { [key: string]: string } = {
      '50': lighter(0.1),
      '100': lighter(0.2),
      '200': lighter(0.4),
      '300': lighter(0.6),
      '400': lighter(0.8),
      '500': baseColorHex,
      '600': darker(0.2),
      '700': darker(0.4),
      '800': darker(0.6),
      '900': darker(0.8),
      '950': darker(0.9),
    };

    return palette;
  }
}
