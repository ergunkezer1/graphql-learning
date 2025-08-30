import { connection } from '../config';
import { IJobDB } from '../model';

const getJobTable = () => connection.table('job');

export function getJobs(
    limit?: number,
    offset?: number
): Promise<Array<IJobDB>> {
    const query = getJobTable().select().orderBy('createdAt', 'desc');
    if (limit) {
        query.limit(limit);
    }
    if (offset) {
        query.offset(offset);
    }
    return query;
}
