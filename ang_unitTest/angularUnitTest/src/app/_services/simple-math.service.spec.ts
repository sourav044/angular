import {
  TestBed, ComponentFixture
} from '@angular/core/testing';
import {
  SimpleMathService
} from './simple-math.service';

describe('SimpleMathService', () => {
  
  let service: SimpleMathService;
  beforeEach(() => { service = new SimpleMathService(); });


  it('should be created', () => {
    const service: SimpleMathService = TestBed.get(SimpleMathService);
    expect(service).toBeTruthy();
  });


  it('should call increment on the service', () => {
       expect(service.increment()).toEqual(2);
  });
  
  it('should call decrement on the service', () => {
    expect(service.decrement()).toEqual(0);
  });

  it('should call divisionexception on the service', () => {
    expect(service.DExpection(0,1)).toEqual("Error");
  });

});
