import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierOrderComponent } from './panier-order.component';

describe('PanierOrderComponent', () => {
  let component: PanierOrderComponent;
  let fixture: ComponentFixture<PanierOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
