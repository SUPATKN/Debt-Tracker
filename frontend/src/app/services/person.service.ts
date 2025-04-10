import { Injectable, signal, WritableSignal } from '@angular/core';
import { Person } from '../../type';

@Injectable({ providedIn: 'root' })
export class PersonService {
  selectedPerson: WritableSignal<Person | null> = signal(null);

  setSelectedPerson(person: Person) {
    this.selectedPerson.set(person);
    console.log(this.selectedPerson());
  }

  clearPerson() {
    this.selectedPerson.set(null);
  }
}
