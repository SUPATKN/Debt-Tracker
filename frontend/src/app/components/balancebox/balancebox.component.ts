import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output,
  Signal,
} from '@angular/core';
import { Person } from '../../../type';
import { PersonService } from '../../services/person.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-balancebox',
  imports: [CommonModule],
  templateUrl: './balancebox.component.html',
  styleUrl: './balancebox.component.css',
})
export class BalanceboxComponent {
  @Input() CurrentPersonBox!: Person | null;
  @Input() Debter!: Person;
  @Input() BGColor!: string;

  selectedPerson: Signal<Person | null> = computed(() =>
    this.personService.selectedPerson()
  );

  constructor(private personService: PersonService) {}
}
