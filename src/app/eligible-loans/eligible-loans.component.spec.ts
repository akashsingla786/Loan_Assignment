import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibleLoansComponent } from './eligible-loans.component';

describe('EligibleLoansComponent', () => {
  let component: EligibleLoansComponent;
  let fixture: ComponentFixture<EligibleLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibleLoansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibleLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
