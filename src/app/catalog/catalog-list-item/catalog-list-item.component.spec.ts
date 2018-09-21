import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogListItemComponent } from './catalog-list-item.component';

describe('CatalogListItemComponent', () => {
  let component: CatalogListItemComponent;
  let fixture: ComponentFixture<CatalogListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
