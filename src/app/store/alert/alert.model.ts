export interface Alert {
    message: string;
    class: Status;
}

export enum Status {
    Primary = 'alert alert-primary',
    Success = 'alert alert-success',
    Danger = 'alert alert-danger',
}