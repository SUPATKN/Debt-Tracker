import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
  output,
  signal,
} from '@angular/core';
import { Person } from '../../../type';
import { CommonModule } from '@angular/common';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  person1 = computed(() => this.personService.person1());
  person2 = computed(() => this.personService.person2());

  selectedPerson!: Person;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.selectedPerson = this.person1();
    this.personService.setSelectedPerson(this.selectedPerson);
  }

  onClickName(person: Person) {
    this.selectedPerson = person;
    this.personService.setSelectedPerson(this.selectedPerson); // ส่งไปเก็บใน shared service
  }
}
