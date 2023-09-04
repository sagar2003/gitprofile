import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExplainComponent } from './user-explain.component';

describe('UserExplainComponent', () => {
  let component: UserExplainComponent;
  let fixture: ComponentFixture<UserExplainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserExplainComponent]
    });
    fixture = TestBed.createComponent(UserExplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
