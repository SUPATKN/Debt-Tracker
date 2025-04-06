import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceboxComponent } from './balancebox.component';

describe('BalanceboxComponent', () => {
  let component: BalanceboxComponent;
  let fixture: ComponentFixture<BalanceboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BalanceboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
