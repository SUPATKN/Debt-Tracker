import { Component, computed, Input, Signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {
  provideNativeDateAdapter,
} from '@angular/material/core';
import { PersonService } from '../../services/person.service';
import { Person } from '../../../type';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-transaction-form',
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './add-transaction-form.component.html',
  styleUrl: './add-transaction-form.component.css',
})
export class AddTransactionFormComponent {
  constructor(private personService: PersonService,  private fb: FormBuilder) {
    this.createForm();
  }

  
  transactionForm!: FormGroup;
  Person1: Signal<Person> = computed(() => this.personService.person1());
  Person2: Signal<Person> = computed(() => this.personService.person2());



  whoPaid!: Person;
  whoReceived!: Person;
  Amount!: number;
  selectedDate: any;
  Description!: string;

  // getter
  get whoPaidControl() { return this.transactionForm.get('whoPaid'); }
  get whoReceivedControl() { return this.transactionForm.get('whoReceived'); }
  get amountControl() { return this.transactionForm.get('amount'); }
  get descriptionControl() { return this.transactionForm.get('description'); }
  get transactionDateControl() { return this.transactionForm.get('transactionDate'); }

  createForm() {
    this.transactionForm = this.fb.group({
      whoPaid: ['', Validators.required],
      whoReceived: ['', [Validators.required, this.differentPersonValidator()]],
      amount: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      transactionDate: [new Date(), Validators.required]
    });
  }


  differentPersonValidator() {
    return (control: FormControl) => {
      if (!control.parent) {
        return null; // Form is initializing
      }
      
      const whoPaid = control.parent?.get('whoPaid')?.value;
      const whoReceived = control.value;
      
      if (whoPaid && whoReceived && whoPaid.id === whoReceived.id) {
        return { samePersonError: true };
      }
      
      return null;
    };
  }

  submitTransaction() {
    if (this.transactionForm.valid) {
      const formValues = this.transactionForm.value;
      console.log(formValues);
      // Send to service or API
    } else {
      // Mark all fields as touched to trigger validation visuals
      this.transactionForm.markAllAsTouched();
    }
  }

  // Update validation when whoPaid changes
  onWhoPaidChange() {
    this.whoReceivedControl?.updateValueAndValidity();
  }
}
