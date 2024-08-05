import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBurgerComponent } from './add-burger.component';

describe('AddBurgerComponent', () => {
  let component: AddBurgerComponent;
  let fixture: ComponentFixture<AddBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBurgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
