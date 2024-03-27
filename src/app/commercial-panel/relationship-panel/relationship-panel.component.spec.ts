import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationshipPanelComponent } from './relationship-panel.component';

describe('RelationshipPanelComponent', () => {
  let component: RelationshipPanelComponent;
  let fixture: ComponentFixture<RelationshipPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelationshipPanelComponent]
    });
    fixture = TestBed.createComponent(RelationshipPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
