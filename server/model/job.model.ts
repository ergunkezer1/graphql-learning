import { ICompany } from './company.model';

export interface IJobDB {
    id: string;
    title: string;
    createdAt: string;
    description: string;
    companyId: string;
}

export interface IJobRes {
    id: string;
    title: string;
    date: string;
    company: ICompany;
}
