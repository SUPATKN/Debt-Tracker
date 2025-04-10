import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../../type';

@Component({
  selector: 'app-balancebox',
  imports: [],
  templateUrl: './balancebox.component.html',
  styleUrl: './balancebox.component.css',
})
export class BalanceboxComponent {
  @Input()
  SelectedPerson!: Person;
  @Input()
  Amount!: number;

  @Input() BGColor!: string;

  Me!:string
  Debter!:string

  ngOnInit(){

  }

  CheckGiver_Debtor(person:Person){
    if(this.SelectedPerson ===)
  }
}
