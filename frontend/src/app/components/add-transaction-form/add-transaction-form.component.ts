import { Component, computed, Input, Signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { PersonService } from '../../services/person.service';
import { Person } from '../../../type';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FormDto, TransactionFormModel } from './dto';
import { DebtService } from '../../services/debt.service';

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
    CommonModule,
  ],
  templateUrl: './add-transaction-form.component.html',
  styleUrl: './add-transaction-form.component.css',
})
export class AddTransactionFormComponent {
  constructor(
    private personService: PersonService,
    private debtService: DebtService,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  transactionForm!: FormGroup<TransactionFormModel>;
  Person1: Signal<Person> = computed(() => this.personService.person1());
  Person2: Signal<Person> = computed(() => this.personService.person2());

  // getter
  get whoPaidControl(): FormControl<Person> {
    return this.transactionForm.controls.whoPaid;
  }

  get whoReceivedControl(): FormControl<Person> {
    return this.transactionForm.controls.whoReceived;
  }

  get amountControl(): FormControl<number> {
    return this.transactionForm.controls.amount;
  }

  get descriptionControl(): FormControl<string> {
    return this.transactionForm.controls.description;
  }

  get transactionDateControl(): FormControl<Date> {
    return this.transactionForm.controls.transactionDate;
  }

  createForm() {
    // สร้าง typed form group ด้วย nonNullable API
    this.transactionForm = this.fb.nonNullable.group({
      whoPaid: this.fb.nonNullable.control({} as Person, Validators.required),
      whoReceived: this.fb.nonNullable.control({} as Person, [
        Validators.required,
        this.differentPersonValidator(),
      ]),
      amount: this.fb.control<number | null>(null, [
        Validators.required,
        Validators.min(0),
      ]),
      description: this.fb.nonNullable.control('', Validators.required),
      transactionDate: this.fb.nonNullable.control(
        new Date(),
        Validators.required
      ),
    }) as FormGroup<TransactionFormModel>; // type assertion เพื่อให้ TypeScript รู้จัก type ที่ถูกต้อง
  }

  differentPersonValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.parent) {
        return null; // Form is initializing
      }

      const formGroup = control.parent as FormGroup;
      const whoPaid = formGroup.get('whoPaid')?.value;
      const whoReceived = control.value;

      if (whoPaid && whoReceived && whoPaid.id === whoReceived.id) {
        return { samePersonError: true };
      }

      return null;
    };
  }

  submitTransaction() {
    if (this.transactionForm.valid) {
      const formValues = this.transactionForm.getRawValue();

      let body: FormDto = {
        whoPaidId: formValues.whoPaid.id,
        whoReceivedId: formValues.whoReceived.id,
        debt: formValues.amount,
        description: formValues.description,
        date: formValues.transactionDate,
      };
      console.log(body);
      console.log(formValues);

      // sent data to API
      this.debtService.postDebt(body).subscribe({
        next: (res) => {
          console.log('✅ POST Success:', res);
        },
        error: (err) => {
          console.error('❌ POST Failed:', err);
        },
      });
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
