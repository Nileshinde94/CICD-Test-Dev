import { Component } from '@angular/core';
import { Header } from 'src/app/Models/header-data';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-header-panel',
  templateUrl: './header-panel.component.html',
  styleUrls: ['./header-panel.component.css']
})
export class HeaderPanelComponent {
  headerData: Header = {} as Header;

  constructor(private headerService: HeaderService) { }

  // ngOnInit(): void {
  //   // Example: Load address data with ID 1
  //   this.borrowerService.getsubmitborrowerById(1).subscribe({
  //     next: (data) => this.borrowerData = data,
  //     error: (error) => console.error('There was an error!', error)
  //   });
  // }

  submitheaderData(): void {
    this.headerService.submitHeader(this.headerData).subscribe({
      next: (response) => console.log('Address data saved successfully', response),
      error: (error) => console.error('Error saving address data', error)
    });
  }
} 