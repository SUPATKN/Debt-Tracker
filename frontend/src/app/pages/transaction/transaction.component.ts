import { Component } from '@angular/core';
import { AddTransactionFormComponent } from "../../components/add-transaction-form/add-transaction-form.component";

@Component({
  selector: 'app-transaction',
  imports: [AddTransactionFormComponent],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.css'
})
export class TransactionComponent {

}
