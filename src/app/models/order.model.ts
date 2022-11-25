export interface Order {
    id: string;
    description: string;
    status: Status;
}

export enum Status {
    Pending = 'Pending',
    Approved = 'Approved',
    Rejected = 'Rejected',
}