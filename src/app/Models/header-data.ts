export interface Header {
    id: number;
    segmentIdentifier: string;
    memberID: number;
    previousMemberID: number;
    dateCreation: string; // DateOnly type in C# should be handled as a string in TypeScript for date formatting
    reportingCycleDate: string;
    informationType: string;
    filler: string;
    createdOn: Date; // DateTime in C# corresponds to Date in TypeScript
    createdBy: string;
    updatedOn: Date;
    updatedBy: string;
    isDeleted: boolean;
}