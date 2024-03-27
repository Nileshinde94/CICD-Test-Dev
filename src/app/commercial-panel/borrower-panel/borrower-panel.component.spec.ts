import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowerPanelComponent } from './borrower-panel.component';

describe('BorrowerPanelComponent', () => {
  let component: BorrowerPanelComponent;
  let fixture: ComponentFixture<BorrowerPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorrowerPanelComponent]
    });
    fixture = TestBed.createComponent(BorrowerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
