import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBalanceComponent } from './current-balance.component';

describe('CurrentBalanceComponent', () => {
  let component: CurrentBalanceComponent;
  let fixture: ComponentFixture<CurrentBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentBalanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
