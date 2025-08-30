import { mergeResolvers } from '@graphql-tools/merge';
import { jobResolvers } from './job.resolver';
import { companyResolvers } from './company.resolver';

export const resolvers = mergeResolvers([jobResolvers, companyResolvers]);
