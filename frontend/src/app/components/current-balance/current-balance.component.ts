import { Component, computed, Input, Signal } from '@angular/core';
import { Person } from '../../../type';
import { BalanceboxComponent } from '../balancebox/balancebox.component';
import { PersonService } from '../../services/person.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-balance',
  imports: [BalanceboxComponent, CommonModule],
  templateUrl: './current-balance.component.html',
  styleUrl: './current-balance.component.css',
})
export class CurrentBalanceComponent {
  @Input() person1!: Person;
  @Input() person2!: Person;

  DebtNetBalance!: Person;

  // ใช้ computed เพื่อติดตามค่า signal ที่เปลี่ยนแปลง
  selectedPerson: Signal<Person | null> = computed(() =>
    this.personService.selectedPerson()
  );

  Debter = computed(() => {
    return this.selectedPerson() === this.person1 ? this.person2 : this.person1;
  });

  constructor(private personService: PersonService) {}

  netBalance = computed(() => {
    return Math.abs(this.person1.DebtAmount - this.person2.DebtAmount);
  });

  CheckDebtNetBalance = computed(() => {
    const total = this.person1.DebtAmount - this.person2.DebtAmount;
    return total > 0 ? this.person1 : this.person2;
  });
}
