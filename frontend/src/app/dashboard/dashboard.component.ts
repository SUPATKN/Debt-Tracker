import { Component, input } from '@angular/core';
import { BalanceboxComponent } from "../components/balancebox/balancebox.component";

@Component({
  selector: 'app-dashboard',
  imports: [BalanceboxComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  person1 = input('');
  person2 = input('');
}
