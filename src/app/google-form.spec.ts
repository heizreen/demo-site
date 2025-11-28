import { TestBed } from '@angular/core/testing';

import { GoogleForm } from './google-form';

describe('GoogleForm', () => {
  let service: GoogleForm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleForm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
