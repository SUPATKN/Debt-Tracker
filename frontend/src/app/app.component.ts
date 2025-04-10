import { Component, signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Person } from '../type';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, SidebarComponent, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  person1: Person = {
    name: 'Yacht',
    DebtAmount: 200,
  };
  person2: Person = {
    name: 'Beam',
    DebtAmount: 300,
  };
}
