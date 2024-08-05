import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerListComponent } from './burger-list.component';

describe('BurgerListComponent', () => {
  let component: BurgerListComponent;
  let fixture: ComponentFixture<BurgerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
