import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoreBurgerComponent } from './restore-burger.component';

describe('RestoreBurgerComponent', () => {
  let component: RestoreBurgerComponent;
  let fixture: ComponentFixture<RestoreBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoreBurgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestoreBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
