import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcommandeComponent } from './listcommande.component';

describe('ListcommandeComponent', () => {
  let component: ListcommandeComponent;
  let fixture: ComponentFixture<ListcommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcommandeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListcommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
