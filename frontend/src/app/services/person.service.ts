import { Injectable, signal, WritableSignal } from '@angular/core';
import { Person } from '../../type';

@Injectable({ providedIn: 'root' })
export class PersonService {
  private _person1 = signal<Person>({ name: '', DebtAmount: 0 });
  private _person2 = signal<Person>({ name: '', DebtAmount: 0 });
  private _selectedPerson = signal<Person | null>(null);

  person1 = this._person1.asReadonly();
  person2 = this._person2.asReadonly();
  selectedPerson = this._selectedPerson.asReadonly();

  setSelectedPerson(person: Person) {
    this._selectedPerson.set(person);
  }

  setInitPersons(p1: Person, p2: Person) {
    this._person1.set(p1);
    this._person2.set(p2);
  }

  clearSelectedPerson() {
    this._selectedPerson.set(null);
  }
}
