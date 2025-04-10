import { Component, computed, Input, Signal } from '@angular/core';
import { Person } from '../../../type';
import { BalanceboxComponent } from '../balancebox/balancebox.component';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-current-balance',
  imports: [BalanceboxComponent],
  templateUrl: './current-balance.component.html',
  styleUrl: './current-balance.component.css',
})
export class CurrentBalanceComponent {
  @Input() person1!: Person;
  @Input() person2!: Person;


  selectedPerson: Signal<Person | null> = computed(() =>
    this.personService.selectedPerson()
  );

  constructor(private personService: PersonService) {}

  netBalance = computed(() => {
    return Math.abs(this.person1.DebtAmount - this.person2.DebtAmount);
  });
}
