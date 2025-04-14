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
  person1: Signal<Person> = computed(() => this.personService.person1());
  person2: Signal<Person> = computed(() => this.personService.person2());

  DebtNetBalance!: Person;

  // ใช้ computed เพื่อติดตามค่า signal ที่เปลี่ยนแปลง
  selectedPerson: Signal<Person | null> = computed(() =>
    this.personService.selectedPerson()
  );

  Debter: Signal<Person> = computed(() => {
    return this.selectedPerson() === this.person1()
      ? this.person2()
      : this.person1();
  });

  constructor(private personService: PersonService) {}

  netBalance: Signal<number> = computed(() => {
    return Math.abs(this.person1().totalDebt - this.person2().totalDebt);
  });

  CheckDebtNetBalance: Signal<Person | null> = computed(() => {
    const total = this.person1().totalDebt - this.person2().totalDebt;
    if(total === 0){
      return null;
    }
    return total > 0 ? this.person1() : this.person2();
  });
}
