import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierContentComponent } from './panier-content.component';

describe('PanierContentComponent', () => {
  let component: PanierContentComponent;
  let fixture: ComponentFixture<PanierContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
