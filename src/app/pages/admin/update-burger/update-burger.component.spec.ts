import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBurgerComponent } from './update-burger.component';

describe('UpdateBurgerComponent', () => {
  let component: UpdateBurgerComponent;
  let fixture: ComponentFixture<UpdateBurgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBurgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateBurgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
