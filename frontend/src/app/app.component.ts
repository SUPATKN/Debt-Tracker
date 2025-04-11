import { Component, OnInit, signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Person } from '../type';
import { RouterOutlet } from '@angular/router';
import { PersonService } from './services/person.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  person1: Person = {
    name: 'Yacht',
    DebtAmount: 200,
  };
  person2: Person = {
    name: 'Beam',
    DebtAmount: 300,
  };

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.setInitPersons(this.person1, this.person2);
  }
}
