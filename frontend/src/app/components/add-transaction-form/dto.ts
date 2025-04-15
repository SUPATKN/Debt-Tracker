import { FormControl } from '@angular/forms';
import { Person } from '../../../type';

export interface FormDto {
  whoPaidId: number;
  whoReceivedId: number;
  debt: number;
  description: string;
  date: Date;
}

export interface TransactionFormModel {
  whoPaid: FormControl<Person>;
  whoReceived: FormControl<Person>;
  amount: FormControl<number>;
  description: FormControl<string>;
  transactionDate: FormControl<Date>;
}
