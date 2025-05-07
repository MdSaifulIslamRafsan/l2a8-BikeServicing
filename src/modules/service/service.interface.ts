export type ServiceStatus = 'pending' | 'in_progress' | 'done';

export interface IService {
    description: string;
    serviceDate: Date;
    bikeId: string;
    status?: ServiceStatus,
    completionDate?: Date;
  }
  