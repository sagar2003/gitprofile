import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavUserDetailComponent } from './nav-user-detail.component';

describe('NavUserDetailComponent', () => {
  let component: NavUserDetailComponent;
  let fixture: ComponentFixture<NavUserDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavUserDetailComponent]
    });
    fixture = TestBed.createComponent(NavUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
