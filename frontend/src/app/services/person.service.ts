import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { Person } from '../../type';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { catchError, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PersonService {
  private users = signal<Person[]>([])
  private _selectedPerson = signal<Person | null>(null);

  readonly person1 = computed(() => this.users()[0] ?? { name: '', amountDebt: 0 });
  readonly person2 = computed(() => this.users()[0] ?? { name: '', amountDebt: 0 });
  selectedPerson = this._selectedPerson.asReadonly();


  constructor(private http: HttpClient) {}
  
  fetchUsers() {
    this.http.get<Person[]>(`${environment.apiUrl}/users`).pipe(
      tap(users => {
        this.users.set(users)
      }),
      catchError(error => {
        console.error('Failed to fetch users', error);
        return of([]);
      })
    ).subscribe();
  }

  setSelectedPerson(person: Person) {
    this._selectedPerson.set(person);
  }


  clearSelectedPerson() {
    this._selectedPerson.set(null);
  }
}
