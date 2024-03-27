import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Header } from '../Models/header-data';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private apiUrl = 'https://localhost:7055/api/header';

  constructor(private http: HttpClient) { }

  // getsubmitborrowerById(id: number): Observable<Borrower> {
  //   return this.http.get<Borrower>(`${this.apiUrl}/${id}`);
  // }

  submitHeader(header: Header): Observable<Header> {
    if (header.id) {
      return this.http.put<Header>(`${this.apiUrl}/${header.id}`, header);
    } else {
      return this.http.post<Header>(this.apiUrl, header);
    }
  }
}