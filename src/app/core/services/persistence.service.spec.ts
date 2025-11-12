import { TestBed } from '@angular/core/testing';
import { PersistenceService } from './persistence.service';

describe('PersistenceService', () => {
  let service: PersistenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersistenceService);
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get an item from localStorage', () => {
    const key = 'testKey';
    const value = { data: 'testData' };
    service.setItem(key, value);
    const result = service.getItem(key);
    expect(result).toEqual(value);
  });

  it('should return null for a non-existent key', () => {
    const result = service.getItem('nonExistentKey');
    expect(result).toBeNull();
  });

  it('should remove an item from localStorage', () => {
    const key = 'testKey';
    const value = { data: 'testData' };
    service.setItem(key, value);
    service.removeItem(key);
    const result = service.getItem(key);
    expect(result).toBeNull();
  });

  it('should handle JSON parsing errors gracefully', () => {
    const key = 'invalidJson';
    localStorage.setItem(key, '{');
    const result = service.getItem(key);
    expect(result).toBeNull();
  });
});
