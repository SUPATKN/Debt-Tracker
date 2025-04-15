import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormDto } from '../components/add-transaction-form/dto';
import { catchError, Observable } from 'rxjs';
import { Debt } from '../../type';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class DebtService {
  constructor(private http: HttpClient) {}

  postDebt(debt: FormDto): Observable<Debt> {
    return this.http.post<Debt>(`${environment.apiUrl}/debts`, debt);
  }
}
