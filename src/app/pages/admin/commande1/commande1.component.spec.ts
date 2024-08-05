import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Commande1Component } from './commande1.component';

describe('Commande1Component', () => {
  let component: Commande1Component;
  let fixture: ComponentFixture<Commande1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Commande1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Commande1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
