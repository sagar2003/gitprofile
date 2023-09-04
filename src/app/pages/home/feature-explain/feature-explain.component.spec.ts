import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureExplainComponent } from './feature-explain.component';

describe('FeatureExplainComponent', () => {
  let component: FeatureExplainComponent;
  let fixture: ComponentFixture<FeatureExplainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeatureExplainComponent]
    });
    fixture = TestBed.createComponent(FeatureExplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
