import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAnalytisComponent } from './product-analytis.component';

describe('ProductAnalytisComponent', () => {
  let component: ProductAnalytisComponent;
  let fixture: ComponentFixture<ProductAnalytisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAnalytisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductAnalytisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
