import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierRootComponent } from './panier-root.component';

describe('PanierRootComponent', () => {
  let component: PanierRootComponent;
  let fixture: ComponentFixture<PanierRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
