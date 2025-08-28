import { connection } from '../config';
import { IJob } from '../model';

const getJobTable = () => connection.table('job');

export async function getJobs(
    limit?: number,
    offset?: number
): Promise<Array<IJob>> {
    const query = getJobTable().select().orderBy('createdAt', 'desc');
    if (limit) {
        query.limit(limit);
    }
    if (offset) {
        query.offset(offset);
    }
    return await query;
}
