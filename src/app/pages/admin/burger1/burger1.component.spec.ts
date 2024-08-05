import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Burger1Component } from './burger1.component';

describe('Burger1Component', () => {
  let component: Burger1Component;
  let fixture: ComponentFixture<Burger1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Burger1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Burger1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
