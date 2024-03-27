import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressPanelComponent } from './address-panel.component';

describe('AddressPanelComponent', () => {
  let component: AddressPanelComponent;
  let fixture: ComponentFixture<AddressPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddressPanelComponent]
    });
    fixture = TestBed.createComponent(AddressPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
