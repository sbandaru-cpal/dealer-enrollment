import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalRetailComponent } from './digital-retail.component';

describe('DigitalRetailComponent', () => {
  let component: DigitalRetailComponent;
  let fixture: ComponentFixture<DigitalRetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalRetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalRetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
