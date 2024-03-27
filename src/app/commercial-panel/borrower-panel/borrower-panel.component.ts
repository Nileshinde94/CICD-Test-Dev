import { Component } from '@angular/core';
import { Borrower } from 'src/app/Models/borrower';
import { BorrowerService } from 'src/app/Services/borrower.service';

@Component({
  selector: 'app-borrower-panel',
  templateUrl: './borrower-panel.component.html',
  styleUrls: ['./borrower-panel.component.css']
})
export class BorrowerPanelComponent {

  borrowerData: Borrower = {} as Borrower;

  constructor(private borrowerService: BorrowerService) { }

  // ngOnInit(): void {
  //   // Example: Load address data with ID 1
  //   this.borrowerService.getsubmitborrowerById(1).subscribe({
  //     next: (data) => this.borrowerData = data,
  //     error: (error) => console.error('There was an error!', error)
  //   });
  // }

  submitborrowerData(): void {
    this.borrowerService.submitborrower(this.borrowerData).subscribe({
      next: (response) => console.log('Address data saved successfully', response),
      error: (error) => console.error('Error saving address data', error)
    });
  }
} 