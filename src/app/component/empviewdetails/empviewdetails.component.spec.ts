import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpviewdetailsComponent } from './empviewdetails.component';

describe('EmpviewdetailsComponent', () => {
  let component: EmpviewdetailsComponent;
  let fixture: ComponentFixture<EmpviewdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpviewdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpviewdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
