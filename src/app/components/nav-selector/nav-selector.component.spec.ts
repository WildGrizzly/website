import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavSelectorComponent } from './nav-selector.component';

describe('NavSelectorComponent', () => {
  let component: NavSelectorComponent;
  let fixture: ComponentFixture<NavSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
