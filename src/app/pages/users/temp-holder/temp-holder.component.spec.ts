import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempHolderComponent } from './temp-holder.component';

describe('TempHolderComponent', () => {
  let component: TempHolderComponent;
  let fixture: ComponentFixture<TempHolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempHolderComponent]
    });
    fixture = TestBed.createComponent(TempHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
