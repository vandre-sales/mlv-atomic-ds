import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersistenceService {
  public setItem(key: string, value: unknown): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  }

  public getItem<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        return JSON.parse(item) as T;
      }
    } catch (error) {
      console.error('Error reading from localStorage', error);
    }
    return null;
  }

  public removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage', error);
    }
  }
}
