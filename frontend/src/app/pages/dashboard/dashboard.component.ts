import {
  Component,
  computed,
  Input,
  input,
  Signal,
  signal,
} from '@angular/core';
import { Person } from '../../../type';
import { TableComponent } from '../../components/table/table.component';
import { CurrentBalanceComponent } from '../../components/current-balance/current-balance.component';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-dashboard',
  imports: [TableComponent, CurrentBalanceComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(private personService: PersonService) {}
  
  person1: Signal<Person> = computed(() => this.personService.person1());
  person2: Signal<Person> = computed(() => this.personService.person2());
}
