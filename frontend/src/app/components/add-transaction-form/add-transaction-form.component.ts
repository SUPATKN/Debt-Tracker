import { Component, computed, Input, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { PersonService } from '../../services/person.service';
import { Person } from '../../../type';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-add-transaction-form',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  templateUrl: './add-transaction-form.component.html',
  styleUrl: './add-transaction-form.component.css',
})
export class AddTransactionFormComponent {
  constructor(private personService: PersonService) {}
  Person1: Signal<Person> = computed(() => this.personService.person1());
  Person2: Signal<Person> = computed(() => this.personService.person2());

  whoPaid!: Person;
  Amount!: number;
  selectedDate: any;
  Description!: string;

  submitTransaction() {
    console.log(this.whoPaid.name);
    console.log(this.Amount);
    console.log(this.selectedDate);
    console.log(this.Description);
  }
}
