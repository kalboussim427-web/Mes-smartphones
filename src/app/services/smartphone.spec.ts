import { TestBed } from '@angular/core/testing';
import { Smartphone } from './smartphone';

describe('Smartphone', () => {
  let service: Smartphone;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Smartphone);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
