import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address } from '../Models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private apiUrl = 'https://yourapiendpoint.com/api/addresses';

  constructor(private http: HttpClient) { }

  // getAddressById(id: number): Observable<Address> {
  //   return this.http.get<Address>(`${this.apiUrl}/${id}`);
  // }

  submitAddress(address: Address): Observable<Address> {
    if (address.id) {
      return this.http.put<Address>(`${this.apiUrl}/${address.id}`, address);
    } else {
      return this.http.post<Address>(this.apiUrl, address);
    }
  }
}
