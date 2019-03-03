import {
  TestBed
} from '@angular/core/testing';
import {
  SimpleMathService
} from './simple-math.service';

describe('SimpleMathService', () => {
  let service: SimpleMathService;
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimpleMathService = TestBed.get(SimpleMathService);
    expect(service).toBeTruthy();
  });


  it('should call increment on the service', () => {
    service.increment();
    expect(service.value).toEqual(1);
  });

  it('should call decrement on the service', () => {
    service.increment();
    expect(service.value).toEqual(0);
  });

  it('should call divisionexception on the service', () => {
    service.DExpection(0,1);
    expect("Error").toEqual("Error");
  });

});
