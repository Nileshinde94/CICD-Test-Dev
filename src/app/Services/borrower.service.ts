import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Borrower } from '../Models/borrower';
@Injectable({
  providedIn: 'root'
})
export class BorrowerService {

  private apiUrl = 'https://localhost:7055/api/borrower';

  constructor(private http: HttpClient) { }

  // getsubmitborrowerById(id: number): Observable<Borrower> {
  //   return this.http.get<Borrower>(`${this.apiUrl}/${id}`);
  // }

  submitborrower(borrower: Borrower): Observable<Borrower> {
    if (borrower.id) {
      return this.http.put<Borrower>(`${this.apiUrl}/${borrower.id}`, borrower);
    } else {
      return this.http.post<Borrower>(this.apiUrl, borrower);
    }
  }
}