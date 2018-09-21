import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierInfosComponent } from './panier-infos.component';

describe('PanierInfosComponent', () => {
  let component: PanierInfosComponent;
  let fixture: ComponentFixture<PanierInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
