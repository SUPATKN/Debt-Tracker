import { Component, computed, Input, input, signal } from '@angular/core';
import { TableComponent } from '../components/table/table.component';
import { Person } from '../../type';
import { CurrentBalanceComponent } from '../components/current-balance/current-balance.component';

@Component({
  selector: 'app-dashboard',
  imports: [TableComponent, CurrentBalanceComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  @Input() person1!: Person;
  @Input() person2!: Person;
}
