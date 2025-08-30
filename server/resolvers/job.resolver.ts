import { ICompany, IJobDB } from '../model';
import { getJobs } from '../services';
import { companyResolvers } from './company.resolver';
export const jobResolvers = {
    Query: {
        job: (): Promise<Array<IJobDB>> => getJobs(),
    },
    Job: {
        date: (job: IJobDB): string =>
            job.createdAt.slice(0, 'yyyy-mm-dd'.length),
        company: (job: IJobDB): Promise<ICompany> =>
            companyResolvers.Query.company(job.companyId),
    },
};
