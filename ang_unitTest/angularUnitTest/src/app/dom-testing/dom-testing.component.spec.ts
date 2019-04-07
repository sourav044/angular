import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DomTestingComponent } from './dom-testing.component';

describe('DomTestingComponent', () => {
  let component: DomTestingComponent;
  let fixture: ComponentFixture<DomTestingComponent>;
  let p: HTMLElement; 

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    p = fixture.nativeElement.querySelector('p');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('should correctly render the passed value @Input value', () => {   
    expect(p.textContent).toContain('');
   });

});
