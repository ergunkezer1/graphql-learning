import { IJob } from '../model';
import { getJobs } from '../services';

export const jobResolvers = {
    Query: {
        job: (): Promise<Array<IJob>> => getJobs(),
    },
};
