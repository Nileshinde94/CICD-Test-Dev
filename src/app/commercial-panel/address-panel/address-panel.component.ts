import { Component } from '@angular/core';
import { Address } from 'src/app/Models/address';
import { AddressService } from 'src/app/Services/address.service';
@Component({
  selector: 'app-address-panel',
  templateUrl: './address-panel.component.html',
  styleUrls: ['./address-panel.component.css']
})
export class AddressPanelComponent {
  addressData: Address = {} as Address;

  constructor(private addressService: AddressService) { }

  // ngOnInit(): void {
  //   // Example: Load address data with ID 1
  //   this.borrowerService.getsubmitborrowerById(1).subscribe({
  //     next: (data) => this.borrowerData = data,
  //     error: (error) => console.error('There was an error!', error)
  //   });
  // }

  submitAddressData(): void {
    this.addressService.submitAddress(this.addressData).subscribe({
      next: (response) => console.log('Address data saved successfully', response),
      error: (error) => console.error('Error saving address data', error)
    });
  }
} 