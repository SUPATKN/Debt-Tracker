import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  data = [
    {
      description: 'Alfreds Futterkiste',
      date: '2023-04-01',
      paidBy: 'Maria Anders',
      owedBy: 'Germany',
      amount: 150
    },
    {
      description: 'Centro comercial Moctezuma',
      date: '2023-05-10',
      paidBy: 'Francisco Chang',
      owedBy: 'Mexico',
      amount: 200
    },
    // เพิ่มข้อมูลตามต้องการ
  ];
}
