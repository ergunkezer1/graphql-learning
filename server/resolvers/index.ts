import { mergeResolvers } from '@graphql-tools/merge';
import { jobResolvers } from './job.resolver';

export const resolvers = mergeResolvers([jobResolvers]);
