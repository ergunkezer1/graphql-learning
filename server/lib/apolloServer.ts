import { ApolloServer, BaseContext } from '@apollo/server';
import { resolvers } from '../resolvers';
import { typeDefs } from '../schemas';

export async function getAndInitApolloServer(): Promise<
    ApolloServer<BaseContext>
> {
    console.log(__dirname, __filename);

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    return apolloServer;
}
