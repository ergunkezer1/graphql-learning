// import DataLoader from 'dataloader';
import { connection } from '../config';
import { ICompany } from '../model';

const getCompanyTable = () => connection.table('company');

export async function getCompany(id: string): Promise<ICompany> {
    return getCompanyTable().first().where({ id });
}

// export function createCompanyLoader() {
//     return new DataLoader(async (ids) => {
//         const companies = await getCompanyTable().select().whereIn('id', ids);
//         return ids.map((id) => companies.find((company) => company.id === id));
//     });
// }
