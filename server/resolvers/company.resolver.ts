import { ICompany } from '../model';
import { getCompany } from '../services';

export const companyResolvers = {
    Query: {
        company: (id: string): Promise<ICompany> => {
            return getCompany(id);
        },
    },
};
