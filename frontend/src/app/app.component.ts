import { Component, OnInit, signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Person } from '../type';
import { RouterOutlet } from '@angular/router';
import { PersonService } from './services/person.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, RouterOutlet,HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.fetchUsers();
  }
}
