import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-balancebox',
  imports: [],
  templateUrl: './balancebox.component.html',
  styleUrl: './balancebox.component.css',
})
export class BalanceboxComponent {
  @Input()
  Name!: string;
}
