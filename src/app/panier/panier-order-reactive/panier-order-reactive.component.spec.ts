import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierOrderReactiveComponent } from './panier-order-reactive.component';

describe('PanierOrderReactiveComponent', () => {
  let component: PanierOrderReactiveComponent;
  let fixture: ComponentFixture<PanierOrderReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierOrderReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierOrderReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
