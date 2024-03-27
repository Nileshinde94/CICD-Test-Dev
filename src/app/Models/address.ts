export interface Address {
    id: number;
    accountNumber: string;
    flag: boolean;
    segmentIdentifier: string;
    borrowerOfficeLocation: string;
    borrowerOfficeNumber: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    city: string;
    state: string;
    district: string; // Note: Corrected the spelling from 'Distric' to 'district'.
    pinCode: string;
    country: string;
    mobileNumber: string;
    telephoneAreaCode: string;
    telephoneNumber: string;
    faxAreaCode: string;
    faxNumber: string;
    filler: string;
    createdOn: Date;
    createdBy: string;
    updatedOn: Date;
    updatedBy: string;
    isDeleted: boolean;
}