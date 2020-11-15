/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RegistroFormService } from './registro-form.service';

describe('Service: RegistroForm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistroFormService]
    });
  });

  it('should ...', inject([RegistroFormService], (service: RegistroFormService) => {
    expect(service).toBeTruthy();
  }));
});
